import React from "react";
import { Row, Col, Card, Typography, Input, Checkbox, Button } from "antd";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import {
  FacebookFilled,
  LinkedinFilled,
  DesktopOutlined,
} from "@ant-design/icons";
import logo from "../../assets/logo.png";
const { Title, Paragraph } = Typography;

const ContactUs = () => {
  const offices = [
    {
      city: "Perth (Subiaco)",
      address: "Level 2, 541 Hay St, Subiaco WA 6008",
    },
    {
      city: "Perth (Osborne Park)",
      address: "Unit 3, 52 Frobisher St, Osborne Park WA 6017",
    },
    {
      city: "Sydney",
      address: "285A Crown St, Surry Hills NSW 2010",
    },
    {
      city: "Melbourne",
      address: "3 Albert Coates Ln, Melbourne VIC 3000",
    },
    {
      city: "Brisbane",
      address: "Unit 3, 255 Leitchs Rd, Brendale QLD 4500",
    },
  ];

  return (
    <div className="contact-us">
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="Austin Technology Logo" />
          </div>

          {/* Navigation Links */}
          <nav className="menu">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact Us</Link>
          </nav>

          {/* Instant Quote Button */}
        </div>
      </header>
      {/* Hero Section */}
      <div className="contact-hero-section">
        <div className="contact-hero-content">
          <Typography.Title
            level={3}
            className="contact-hero-heading"
            style={{ color: "#CB1D24" }}
          >
            Get In Touch With Us
          </Typography.Title>
          <Typography.Paragraph className="contact-hero-description">
            We’re here to answer any questions you have, so please feel free to
            email, call, or drop us a note using the form at the bottom of the
            page. We look forward to hearing from you!
          </Typography.Paragraph>
          <Typography.Title level={4} className="contact-hero-phone">
            1300 787 429
          </Typography.Title>
        </div>
      </div>

      {/* Contact Header Section */}

      {/* Contact Form Section */}
      <div className="contact-form-container">
        <Row gutter={[32, 32]}>
          {/* Left Section: Information */}
          <Col xs={24} md={12}>
            <div className="contact-info">
              <Typography.Title level={3} className="form-title">
                Get in touch <span className="highlight">today</span>
              </Typography.Title>
              <Typography.Paragraph className="form-description">
                Vasilissa Technology delivers flexible, client-focused IT
                support, with:
              </Typography.Paragraph>
              <ul className="info-list">
                <li>World-class systems and infrastructure</li>
                <li>
                  Comprehensive IT solutions from unlimited support to project
                  delivery
                </li>
                <li>Best people, expert advice and fast response</li>
                <li>Zero risk</li>
              </ul>
              <Typography.Paragraph>
                Talk with Channing Park CIR Cary most responsive MSP at{" "}
                <span className="contact-phone">1300 787 429</span>, or fill in
                the form to connect with an IT specialist.
              </Typography.Paragraph>
            </div>
          </Col>

          {/* Right Section: Form */}
          <Col xs={24} md={12}>
            <form className="contact-form">
              <div className="form-row">
                <Input
                  placeholder="Full Name *"
                  className="form-input"
                  required
                />
                <Input
                  placeholder="Company *"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-row">
                <Input
                  placeholder="Email *"
                  type="email"
                  className="form-input"
                  required
                />
                <Input
                  placeholder="Phone Number *"
                  type="tel"
                  className="form-input"
                  required
                />
              </div>

              <Input.TextArea
                placeholder="How can we help?"
                rows={4}
                className="form-textarea"
                required
              />
              <Button type="primary" htmlType="submit" className="submit-btn">
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </div>

      {/* Offices Section */}

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">
              <img
                src={logo}
                style={{ width: 78 }}
                alt="Vasilissa  Technology Logo"
              />
            </div>
            <Paragraph
              style={{ color: "white", fontSize: 18, fontWeight: 500 }}
            >
              We’re more than just an IT company and technology provider – we’re
              a partner that has your best interest as our number one focus.
            </Paragraph>
            <Paragraph
              style={{ color: "white", fontSize: 18, fontWeight: 500 }}
            >
              © 2024 All rights reserved
            </Paragraph>
            <div className="footer-social">
              <a href="#facebook">
                <FacebookFilled
                  style={{ fontSize: "28px", color: "#CB1D24" }}
                />
              </a>
              <a href="#linkedin">
                <LinkedinFilled
                  style={{ fontSize: "28px", color: "#CB1D24" }}
                />
              </a>
            </div>
          </div>
          <div className="footer-right">
            <Title level={4}>Your Success is Our Top Priority.</Title>
            <Paragraph
              style={{ color: "white", fontSize: 18, fontWeight: 500 }}
            >
              From start-ups of 5 employees, to established companies with over
              300 staff, our flexible service packages scale with your needs,
              promote smooth operations, and enable your internal IT team to
              focus on strategic goals.
            </Paragraph>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
