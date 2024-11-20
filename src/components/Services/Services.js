import React from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Collapse,
  Button,
  Form,
  Input,
  Checkbox,
} from "antd";
import "./Services.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import servicegrowth from "../../assets/servicesgrowth.jpg";
import {
  AppstoreOutlined,
  SafetyOutlined,
  UsergroupAddOutlined,
  RocketOutlined,
  LockOutlined,
  UserOutlined,
  GlobalOutlined,
  FacebookFilled,
  LinkedinFilled,
  DesktopOutlined,
  CloudOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  TabletOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const Services = () => {
  const services = [
    {
      icon: <CloudOutlined style={{ fontSize: "48px", color: "#001F54" }} />,
      title: "Managed Servers",
      description: [
        "24/7 Monitoring",
        "Patching and Updates",
        "Configuration Management",
      ],
    },
    {
      icon: <GlobalOutlined style={{ fontSize: "48px", color: "#001F54" }} />,
      title: "Managed Networks",
      description: [
        "Firewall Management",
        "Control Filtering",
        "LAN and WAN Setup",
      ],
    },
    {
      icon: <DesktopOutlined style={{ fontSize: "48px", color: "#001F54" }} />,
      title: "Managed Workstations",
      description: [
        "High Workstation Availability",
        "Secure Patching",
        "Driver and Application Updates",
      ],
    },
    {
      icon: <UserOutlined style={{ fontSize: "48px", color: "#001F54" }} />,
      title: "End User Support",
      description: [
        "Highly Qualified Help Desk Engineers",
        "Rapid Responses",
        "Unlimited Day-to-Day IT Support",
      ],
    },
  ];
  const faqItems = [
    {
      question: "Why is IT important for my business?",
      answer:
        "Without an effective IT plan, your business can be left behind or worse, become a potential target for cybercriminals. IT can help improve productivity, reduce costs and offer greater flexibility within the workplace.",
    },
    {
      question: "What IT services will my business need?",
      answer:
        "This depends on the size of your business and your specific needs.",
    },
    {
      question: "Why should I move to the cloud?",
      answer:
        "The cloud provides flexibility, cost-efficiency, and scalability.",
    },
    {
      question: "What does MSP mean?",
      answer: "MSP stands for Managed Service Provider.",
    },
  ];

  const features = [
    {
      icon: <UserOutlined style={{ fontSize: "48px", color: "#FF0000" }} />,
      title: "Certified IT Team",
      description:
        "Our engineers are certified in a wide range of leading solutions, including Microsoft and Cisco.",
    },
    {
      icon: (
        <ExclamationCircleOutlined
          style={{ fontSize: "48px", color: "#FF0000" }}
        />
      ),
      title: "Immediate Attention",
      description:
        "We triage and address support tickets within a guaranteed 15-minute window.",
    },
    {
      icon: (
        <ClockCircleOutlined style={{ fontSize: "48px", color: "#FF0000" }} />
      ),
      title: "24/7 Unlimited IT Support",
      description:
        "Our dedicated team is always on call to help you resolve any issue to ensure minimal downtime.",
    },
    {
      icon: <TabletOutlined style={{ fontSize: "48px", color: "#FF0000" }} />,
      title: "ACSC Essential 8 Specialisation",
      description:
        "We will align your security measures with the nation’s certified risk mitigation strategies.",
    },
  ];

  return (
    <>
      <div>
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
      </div>
      <div className="custom-hero-section">
        <div className="custom-hero-content">
          <Typography.Title level={2} className="custom-hero-title">
            PROVEN, RELIABLE, PROACTIVE: MANAGED IT YOU CAN TRUST
          </Typography.Title>

          <Typography.Paragraph className="custom-hero-description">
            We place our clients at the heart of everything we do. Our
            innovative IT solutions are designed to enhance, secure, and
            streamline your business operations.
          </Typography.Paragraph>
        </div>
      </div>

      <div className="services-page">
        {/* Hero Section */}

        {/* Core Services Section */}
        <div className="core-services-section">
          <Title level={2} className="core-services-title">
            Our Core Services: Proactive IT Support for Businesses
          </Title>
          <Paragraph className="core-services-description">
            By partnering with Vasilissa Technology for all your business IT
            support in United States, you gain access to a full suite of managed
            IT services characterized by a strong focus on the Microsoft 365
            stack, cybersecurity, and highly responsive managed services.
          </Paragraph>
          <Row gutter={[32, 32]}>
            {services.map((service, index) => (
              <Col xs={24} md={12} key={index} className="service-col">
                <div className="service-item">
                  <div className="service-icon">{service.icon}</div>
                  <Title level={4} className="service-title">
                    {service.title}
                  </Title>
                  <ul className="service-description">
                    {service.description.map((point, idx) => (
                      <li key={idx}>
                        <CheckCircleOutlined
                          style={{ color: "#FF0000", marginRight: "10px" }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Success Section */}
        <div className="success-section">
          <Row align="middle" gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <img
                src={servicegrowth}
                alt="Success"
                className="success-image"
              />
            </Col>
            <Col xs={24} md={12} className="success-content">
              <div className="success-content-wrapper">
                <Typography.Title level={3} className="success-title">
                  Your Success is Our Top Priority
                </Typography.Title>
                <Typography.Paragraph className="success-description">
                  At Vasilissa Technology, we pride ourselves on being a trusted
                  partner for businesses across the United States. Through our
                  proactive and client-focused approach, we’ve helped
                  organizations streamline their operations, enhance security,
                  and achieve operational excellence. Our success stories span
                  industries, where we’ve:
                </Typography.Paragraph>
                <ul className="success-list">
                  <li>
                    Enabled seamless transitions to modern IT infrastructures.
                  </li>
                  <li>
                    Delivered cutting-edge solutions to address unique business
                    challenges.
                  </li>
                  <li>
                    Ensured uninterrupted operations through 24/7 support and
                    monitoring.
                  </li>
                </ul>
                <Typography.Paragraph className="success-description">
                  One of our key success stories includes a mid-sized company
                  struggling with downtime and outdated systems. Through our
                  managed IT services, we revamped their network, implemented
                  robust cybersecurity measures, and provided real-time support,
                  reducing downtime by 90%. The company now enjoys higher
                  productivity, greater efficiency, and peace of mind knowing
                  their IT systems are in expert hands.
                </Typography.Paragraph>
                <Typography.Paragraph className="success-description">
                  At Vasilissa Technology, your success is our priority. Let us
                  guide your business toward a brighter, more resilient future.
                </Typography.Paragraph>
              </div>
            </Col>
          </Row>
        </div>

        {/* FAQ and Contact Section */}
        {/* <div className="faq-contact-section">
          <Row gutter={16}>
            <Col span={12}>
              <Title>Contact Us</Title>
              <Form layout="vertical">
                <Form.Item
                  label="Full Name"
                  name="fullName"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Enter your full name" />
                </Form.Item>
                <Form.Item
                  label="Company"
                  name="company"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Enter your company name" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>
                <Form.Item
                  label="Phone Number"
                  name="phoneNumber"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Enter your phone number" />
                </Form.Item>
                <Form.Item
                  name="services"
                  label="Which solutions are you interested in?"
                >
                  <Checkbox.Group>
                    <Row>
                      <Col span={12}>
                        <Checkbox value="Managed IT Services">
                          Managed IT Services
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="Cybersecurity">Cybersecurity</Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="Cloud Services">
                          Cloud Services
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="Professional Services">
                          Professional Services
                        </Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col span={12}>
              <Title>FAQ</Title>
              <Collapse>
                {faqItems.map((item, index) => (
                  <Panel header={item.question} key={index}>
                    <Paragraph>{item.answer}</Paragraph>
                  </Panel>
                ))}
              </Collapse>
            </Col>
          </Row>
        </div> */}
      </div>
      <div className="centered-section">
        <div className="centered-content">
          <Typography.Title level={1} className="centered-title">
            Why choose Vasilissa Technology?
          </Typography.Title>
        </div>
      </div>

      <div className="features-section">
        <Row gutter={[32, 32]}>
          {features.map((feature, index) => (
            <Col xs={24} sm={12} md={6} key={index} className="feature-column">
              <div className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <Title level={4} className="feature-title">
                  {feature.title}
                </Title>
                <Paragraph className="feature-description">
                  {feature.description}
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </div>

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
    </>
  );
};

export default Services;
