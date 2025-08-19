require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const dns = require('dns');

const app = express();
const port = process.env.PORT || 3020;

// ✅ Allowed origins for CORS
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://jolusecurity.com", "https://www.jolusecurity.com"]
    : ["http://localhost:8081", "http://localhost:8080"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// ✅ Handle preflight
app.options("*", cors());

app.use(express.json());

// ✅ Connect to MongoDB
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

async function connectToMongo() {
  try {
    await client.connect();
    db = client.db(process.env.MONGO_DB_NAME);
    console.log("✅ Connected to MongoDB Atlas");

    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB", err);
    process.exit(1);
  }
}
connectToMongo();

// ✅ Serve static files
app.use('/lovable-uploads', express.static(path.join(__dirname, 'public/lovable-uploads')));

// ✅ Sample Services API
const services = [
  { title: "Manned Guarding", description: "Professional security personnel providing reliable and comprehensive security solutions for residential, commercial, and industrial properties.", image: "/lovable-uploads/manned-guarding.png" },
  { title: "Events Security", description: "Exceptional event security solutions and professional services to ensure safety and smooth execution of gatherings of all sizes.", image: "/lovable-uploads/events-security.png" },
  { title: "K9 Unit Services", description: "Specialized canine security units for enhanced threat detection, drug screening, and comprehensive security operations.", image: "/lovable-uploads/k9-unit-services.png" },
  { title: "CCTV Installation", description: "Advanced CCTV installation services to help clients monitor and secure their premises effectively with continuous monitoring.", image: "/lovable-uploads/cctv-installation.png" },
  { title: "Electric Fencing", description: "Professional electric fencing installation and maintenance services to create secure perimeters for residential and commercial properties.", image: "/lovable-uploads/electric-fencing.png" },
  { title: "Alarm Response", description: "Swift and reliable alarm response services to protect property and respond immediately to security threats and potential risks.", image: "/lovable-uploads/alarm-response.png" },
  { title: "VIP Close Protection", description: "Elite personal protection services for high-profile individuals, executives, and VIPs requiring discreet and professional security.", image: "/lovable-uploads/vip-close-protection.png" },
];

// ✅ Routes
app.get("/", (req, res) => {
  res.send("✅ Jolu Security Backend is live.");
});

app.get("/api/services", (req, res) => {
  res.json(services);
});

// ✅ DNS lookup for SMTP host
dns.lookup(process.env.EMAIL_HOST, (err, address) => {
  if (err) console.error('❌ DNS lookup failed for SMTP host:', err);
  else console.log('✅ DNS lookup succeeded for SMTP host:', address);
});

// ✅ Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// ✅ Verify transporter
transporter.verify((error, success) => {
  if (error) console.error('❌ SMTP verification failed:', error);
  else console.log('✅ SMTP connection verified');
});

// ✅ Contact Form
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, service, county, area, message } = req.body;

  const mailOptions = {
    from: `"Jolu Group Security" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: "New Contact Form Submission",
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>County:</strong> ${county}</p>
      <p><strong>Area:</strong> ${area}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    if (!db) throw new Error("MongoDB not connected");

    await db.collection("contacts").insertOne({ name, email, phone, service, county, area, message, createdAt: new Date() });

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Contact Form Email sent:", info);

    res.status(200).json({ message: "Message sent and saved successfully" });
  } catch (error) {
    console.error("❌ Contact Submission Error:", error);
    res.status(500).json({ message: "Failed to process contact request", error: error.message });
  }
});

// ✅ Quote Form
app.post("/api/quote", async (req, res) => {
  const { name, email, phone, company, county, area, service, message, guards } = req.body;

  const mailOptions = {
    from: `"Jolu Group Security" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: "New Quote Request",
    html: `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      <p><strong>County:</strong> ${county}</p>
      <p><strong>Area/Town:</strong> ${area}</p>
      ${guards ? `<p><strong>No. of Guards:</strong> ${guards}</p>` : ""}
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    if (!db) throw new Error("MongoDB not connected");

    await db.collection('quotes').insertOne({ name, email, phone, company, county, area, service, message, guards, createdAt: new Date() });

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Quote Request Email sent:", info);

    res.status(200).json({ message: "Quote request sent and saved successfully" });
  } catch (error) {
    console.error("❌ Quote Submission Error:", error);
    res.status(500).json({ message: "Failed to process quote request", error: error.message });
  }
});
