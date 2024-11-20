import React from "react";
import { Row, Col, Typography, Card, Button } from "antd";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import landingpageIT from "../../assets/landingpageIT.png";
import logo from "../../assets/logo.png";
import landingpageIT2 from "../../assets/landingpageIT2.png";
// import aboutusonestop from
import {
  DesktopOutlined,
  AppstoreOutlined,
  CloudOutlined,
  SafetyOutlined,
  UsergroupAddOutlined,
  RocketOutlined,
  LockOutlined,
  FacebookFilled,
  LinkedinFilled,
  BankOutlined,
  CustomerServiceOutlined,
  BulbOutlined,
  CrownOutlined,
  SettingOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

import aboutusq from "../../assets/aboutusq.png";
import landingpageIT3m from "../../assets/landingpageIT3m.png";
import aboutustr from "../../assets/aboutustr.jpg";
const { Title, Paragraph } = Typography;

const AboutUs = () => {
  const values = [
    {
      icon: <BulbOutlined style={{ fontSize: "48px", color: "#CB1D24" }} />,
      title: "Innovate Continuously",
      description:
        "We thrive on curiosity, challenging the status quo to drive improvement and deliver cutting-edge solutions.",
    },
    {
      icon: <CrownOutlined style={{ fontSize: "48px", color: "#CB1D24" }} />,
      title: "Simplify & Deliver Excellence",
      description:
        "We streamline processes for clear, efficient solutions, consistently aiming for the highest quality in every task.",
    },
    {
      icon: <SettingOutlined style={{ fontSize: "48px", color: "#CB1D24" }} />,
      title: "Own the Solution",
      description:
        "We take full responsibility for problems and solutions, ensuring accountability and outstanding results.",
    },
    {
      icon: (
        <UsergroupAddOutlined style={{ fontSize: "48px", color: "#CB1D24" }} />
      ),
      title: "Collaborate as a Team",
      description:
        "Teamwork is at the heart of our success, driving impactful collaboration and mutual growth.",
    },
    {
      icon: <GlobalOutlined style={{ fontSize: "48px", color: "#CB1D24" }} />,
      title: "Think Globally",
      description:
        "We maintain a global perspective, delivering solutions that create lasting impact across boundaries.",
    },
  ];

  return (
    <div className="about-us">
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
      <div className="hero-section">
        <div>
          <h1>Empowering Innovation, Driving Success</h1>
          <p>
            At Vasilissa Technologies, we are committed to transforming
            businesses through innovative IT solutions. With expertise across
            diverse domains, we deliver tailored services that enhance
            efficiency, security, and growth, enabling our clients to achieve
            their strategic goals with confidence.
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="description-section">
        <Row gutter={[16, 16]} align="middle">
          <Col span={12}>
            <img
              src={aboutustr}
              alt="About Austin Technology"
              className="description-image"
            />
          </Col>
          <Col span={12}>
            <Title level={1}>
              We’re more than just an IT company and technology provider.
            </Title>
            <Paragraph style={{ fontSize: 18 }}>
              At Vasilissa Technologies, our strength lies in delivering
              innovative solutions across a diverse range of disciplines and
              domains. By ensuring the highest standards of quality and
              unwavering commitment to compliance, we empower our clients to
              focus on their core strategic objectives. Since our inception, we
              have built a solid reputation for excellence, earning the trust
              and loyalty of our clients. Our sustained growth reflects the
              confidence they place in us—a testament to the certainty and
              reliability we provide every day.
            </Paragraph>
            <Paragraph style={{ fontSize: 18 }}>
              Our services go beyond standard IT support to deliver complete
              infrastructure solutions designed for the unique challenges of
              your business. As a Microsoft Solutions Partner, we leverage
              expertise in Microsoft Modern Work and cloud environments to
              create flexible solutions—whether on-premises, in the cloud, or
              hybrid.
            </Paragraph>
          </Col>
        </Row>
      </div>
      <div id="difference" className="difference-section">
        <Title>
          <span style={{ color: "white" }}>The</span>{" "}
          <span className="highlight">Vasilissa Technologies</span>{" "}
          <span style={{ color: "white" }}>difference</span>
        </Title>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <div className="difference-card">
              <BulbOutlined style={{ fontSize: "48px", color: "#d50032" }} />

              <Title level={4}>Technical Knowledge</Title>
              <Paragraph
                style={{
                  fontWeight: 500,
                  color: "#cecece",
                  fontSize: "medium",
                }}
              >
                Our team of experts is fully certified and qualified in various
                areas of IT. We constantly train to ensure your business
                receives the highest security and best IT practices.
              </Paragraph>
            </div>
          </Col>
          <Col span={8}>
            <div className="difference-card">
              <BankOutlined style={{ fontSize: "48px", color: "#d50032" }} />

              <Title level={4}>Future-Proof Your Business</Title>
              <Paragraph
                style={{
                  fontWeight: 500,
                  color: "#cecece",
                  fontSize: "medium",
                }}
              >
                The threat of cyberattacks is real and increasing. It’s vital
                for businesses to partner with an IT company that understands
                these threats and is proactive about preventing an attack from
                occurring.
              </Paragraph>
            </div>
          </Col>
          <Col span={8}>
            <div className="difference-card">
              <CustomerServiceOutlined
                style={{ fontSize: "48px", color: "#d50032" }}
              />
              <Title level={4}>24/7 Unlimited IT Support</Title>
              <Paragraph
                style={{
                  fontWeight: 500,
                  color: "#cecece",
                  fontSize: "medium",
                }}
              >
                Should you experience an IT issue, it’s good to know you always
                have a team of experts on call. No waiting and minimal downtime.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
      <div className="testimonial-section">
        <Row align="middle" gutter={[16, 16]}>
          <Col span={12}>
            <img
              src={landingpageIT3m}
              alt="Team at Work"
              className="testimonial-image"
            />
          </Col>
          <Col span={12}>
            <div className="testimonial-content">
              <div className="quote-mark">“</div>
              <Paragraph>
                At Vasilissa Technologies, we don't just deliver solutions—we
                empower possibilities. With a steadfast commitment to quality,
                innovation, and compliance, we help our clients focus on what
                matters most: achieving their strategic goals. Our growth is
                fueled by the trust of those we serve, a testament to the
                certainty and excellence we bring to every partnership
              </Paragraph>
              <Paragraph className="testimonial-author">
                Mark Alexander
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
      <div className="values-section">
        <Title className="section-title">Our Core Values</Title>
        <Row
          gutter={[32, 32]}
          justify="center"
          style={{ padding: "40px 20px" }}
        >
          {values.map((value, index) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              key={index}
              style={{ textAlign: "center" }}
            >
              {value.icon}
              <Title level={4} style={{ marginTop: "20px" }}>
                {value.title}
              </Title>
              <Paragraph>{value.description}</Paragraph>
            </Col>
          ))}
        </Row>
      </div>

      {/* Core Values Section */}

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">
              <img
                src={logo}
                style={{ width: 78 }}
                alt="Austin Technology Logo"
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

export default AboutUs;
