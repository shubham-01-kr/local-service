# Software Requirements Specification (SRS)
## Local Service Provider System

**Version:** 1.0  
**Date:** 29 January 2026  
**Prepared By:** Development Team  
**Status:** Final Draft for Approval

---

## Document Control

### Revision History

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 0.1 | 15 Jan 2026 | Development Team | Initial draft | - |
| 0.5 | 22 Jan 2026 | Development Team | Added diagrams & NFRs | - |
| 1.0 | 29 Jan 2026 | Development Team | Complete document | Pending |

### Document Approvers

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Product Owner | _____________ | _____________ | _______ |
| Technical Lead | _____________ | _____________ | _______ |
| QA Lead | _____________ | _____________ | _______ |
| Project Manager | _____________ | _____________ | _______ |
| Stakeholder Rep | _____________ | _____________ | _______ |

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Overall Description](#2-overall-description)
3. [System Models & Diagrams](#3-system-models--diagrams)
4. [Specific Requirements](#4-specific-requirements)
5. [Data Requirements](#5-data-requirements)
6. [External Interface Requirements](#6-external-interface-requirements)
7. [Non-Functional Requirements](#7-non-functional-requirements)
8. [System Features (Detailed)](#8-system-features-detailed)
9. [Quality Attributes](#9-quality-attributes)
10. [Other Requirements](#10-other-requirements)
11. [Appendices](#11-appendices)

---

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) provides a comprehensive description of the **Local Service Provider System** - a web-based platform connecting customers with local service professionals. This document serves as the primary reference for:

- **Development Team:** Technical implementation blueprint
- **QA/Testing Team:** Test planning and validation criteria
- **Project Managers:** Scope definition and progress tracking
- **Stakeholders:** Requirements validation and business alignment
- **UI/UX Designers:** Interface design specifications
- **System Administrators:** Deployment and operations guidance

The system enables customers to discover, evaluate, and book local service providers (plumbers, electricians, carpenters, etc.) while providing service professionals with a platform to manage their business presence and customer requests.

### 1.2 Document Conventions

**Typography:**
- **Bold text:** Important terms, requirements IDs, emphasis
- *Italic text:* Field names, UI elements, technical terms
- `Monospace:` Code, commands, system values, database fields
- UPPERCASE: Acronyms and table names

**Priority Levels:**
- **High (H):** Must have - Critical for Phase 1
- **Medium (M):** Should have - Important for Phase 1 or early Phase 2
- **Low (L):** Nice to have - Phase 2 or beyond

**Requirement Identifiers:**
- FR-X.Y: Functional Requirement (Section X, Item Y)
- NFR-X: Non-Functional Requirement (Item X)
- UR-X: User Interface Requirement (Item X)
- DR-X: Data Requirement (Item X)

### 1.3 Intended Audience and Reading Suggestions

**For Developers:**
- Start with Section 3 (System Models) for architecture overview
- Focus on Sections 4-6 for technical requirements
- Reference Section 5 for database schema details
- Review Section 8 for detailed feature specifications

**For Testers:**
- Begin with Section 4 for functional requirements
- Study Section 7 for non-functional requirements
- Check Section 8 for acceptance criteria
- Use Section 11.C for test scenario examples

**For Project Managers:**
- Read Section 1 for project context
- Review Section 2 for scope and constraints
- Focus on Section 4 for feature prioritization
- Check Section 10 for project dependencies

**For Stakeholders:**
- Read Sections 1-2 for business context
- Review Section 3 for system visualization
- Focus on Section 8 for feature descriptions
- Check Section 10 for assumptions and risks

### 1.4 Project Scope

**Product Name:** Local Service Provider System

**Product Mission:**  
To create a trusted, easy-to-use platform that connects local service seekers with verified service professionals, reducing friction in the home services marketplace while building community trust.

**Business Goals:**
1. Reduce average time to find reliable service providers from days to minutes
2. Increase business opportunities for local service professionals by 40%
3. Establish 1,000+ active users within 6 months of launch
4. Achieve 80%+ customer satisfaction rate
5. Build foundation for sustainable platform growth

**In Scope (Phase 1):**
- User registration, authentication, and profile management
- Service provider onboarding and profile creation
- Service search with filtering and sorting capabilities
- Booking request system with status tracking
- Review and rating system
- Admin dashboard for quality control
- Email notification system
- Mobile-responsive web interface

**Out of Scope (Phase 1):**
- Payment processing and escrow system
- Real-time chat between users and providers
- Mobile native applications (iOS/Android)
- AI-powered recommendations
- Video consultations
- Calendar integration with third-party services
- Background check verification (manual process initially)
- Multi-language support

**Success Criteria:**
- 95% uptime during business hours
- Search results load in under 2 seconds
- User can complete booking request in under 3 minutes
- Admin can process provider approval in under 10 minutes
- Zero critical security vulnerabilities at launch

### 1.5 References

**Standards:**
- IEEE Std 830-1998: IEEE Recommended Practice for Software Requirements Specifications
- ISO/IEC/IEEE 29148:2018: Systems and software engineering — Life cycle processes — Requirements engineering
- WCAG 2.1: Web Content Accessibility Guidelines (Level AA compliance)
- OWASP Top 10: Web Application Security Risks

**Industry Resources:**
- "Software Requirements" by Karl Wiegers (3rd Edition, 2013)
- "Writing Effective Use Cases" by Alistair Cockburn
- "Database Design for Mere Mortals" by Michael J. Hernandez

**Project Documents:**
- Project Charter (v1.2, dated 10 Jan 2026)
- Business Case Analysis (v1.0, dated 05 Jan 2026)
- Market Research Report (v1.0, dated 20 Dec 2025)
- Risk Management Plan (v1.0, dated 15 Jan 2026)

**Technical References:**
- MySQL 8.0 Documentation
- RESTful API Design Best Practices
- OAuth 2.0 Authorization Framework (RFC 6749)

---

## 2. Overall Description

### 2.1 Product Perspective

The Local Service Provider System is a **new, self-contained web application** designed to operate independently without integration requirements to existing systems. It represents a greenfield project entering the home services marketplace.

**System Context:**

The system operates within the following ecosystem:

```
External Environment:
├── End Users (Customers & Service Providers)
│   └── Access via: Web Browsers (Desktop, Mobile, Tablet)
├── Email Service Provider
│   └── SMTP integration for notifications
├── Web Hosting Infrastructure
│   └── Cloud or on-premise deployment
└── Database Management System
    └── MySQL/PostgreSQL for data persistence
```

**System Boundaries:**

**Inside System Boundary:**
- User authentication and session management
- Service discovery and search engine
- Booking request workflow
- Provider profile management
- Review and rating system
- Admin moderation tools
- Notification generation
- Data storage and retrieval

**Outside System Boundary:**
- Email delivery infrastructure (external SMTP service)
- Payment processing (future integration)
- SMS delivery (future integration)
- Identity verification services (future integration)
- Map/location services (future integration)

**System Interfaces:**

The system communicates with external entities through well-defined interfaces:

1. **User Interface:** HTML/CSS/JavaScript served via HTTPS
2. **Email Interface:** SMTP protocol for outbound notifications
3. **Database Interface:** SQL over secure connection
4. **File Storage Interface:** Local or cloud storage API

*(See Section 3 for detailed System Context Diagram)*

### 2.2 Product Functions

**High-Level Capabilities:**

The system provides five primary functional areas:

**1. User Management**
- Account creation and authentication
- Role-based access control (Customer, Provider, Admin)
- Profile management and preferences
- Session management and security

**2. Service Discovery**
- Keyword-based service search
- Multi-criteria filtering (location, price, rating, service type)
- Provider profile viewing with comprehensive information
- Search result sorting and ranking

**3. Booking Management**
- Service request submission with detailed requirements
- Real-time status tracking (Pending → Accepted → Completed)
- Request modification and cancellation
- Job history and records

**4. Provider Operations**
- Business profile creation and management
- Service catalog with pricing
- Request inbox and response management
- Performance dashboard with metrics

**5. Quality Assurance**
- Customer review and rating submission
- Provider verification and approval workflow
- Content moderation and quality control
- System monitoring and reporting

*(See Section 3 for Use Case Diagrams showing detailed interactions)*

### 2.3 User Classes and Characteristics

| User Class | Persona | Technical Expertise | Frequency | Primary Goals | Key Characteristics |
|------------|---------|---------------------|-----------|---------------|---------------------|
| **Customer** | Sarah (35, homeowner) | Basic | Occasional (1-3x/month) | Find reliable service quickly | • Values trust signals<br/>• Time-constrained<br/>• Mobile-first user<br/>• Needs simple interface |
| **Service Provider** | Mike (42, electrician) | Basic-Moderate | Daily | Get quality leads | • Business-focused<br/>• Responds quickly<br/>• Manages multiple jobs<br/>• Needs mobile access |
| **System Admin** | Alex (28, platform manager) | Moderate-High | Daily | Maintain quality | • Detail-oriented<br/>• Handles disputes<br/>• Monitors metrics<br/>• Desktop-primary user |

**User Journey Maps:**

**Customer Journey:**
1. **Discovery:** Searches for service (e.g., "plumber near me")
2. **Evaluation:** Reviews provider profiles, ratings, pricing
3. **Decision:** Selects provider and submits request
4. **Engagement:** Receives response, schedules service
5. **Completion:** Service delivered, leaves review
6. **Loyalty:** Returns for future needs or refers others

**Provider Journey:**
1. **Onboarding:** Creates profile, adds services, awaits approval
2. **Activation:** Admin approves, profile goes live
3. **Discovery:** Appears in customer searches
4. **Engagement:** Receives requests, responds promptly
5. **Delivery:** Completes jobs, builds reputation
6. **Growth:** Gains reviews, increases visibility

### 2.4 Operating Environment

**Client-Side Requirements:**

| Component | Specification |
|-----------|---------------|
| **Browsers** | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ |
| **Screen Resolution** | Minimum: 320px wide (mobile)<br/>Optimal: 768px+ (tablet/desktop) |
| **JavaScript** | Enabled (ES6+ support) |
| **Network** | Minimum: 3G/4G mobile or broadband<br/>Recommended: 4G/LTE or WiFi |
| **Storage** | Cookies and Local Storage enabled |

**Server-Side Requirements:**

| Component | Specification |
|-----------|---------------|
| **Operating System** | Linux (Ubuntu 20.04+ or RHEL 8+) preferred<br/>Or Windows Server 2019+ |
| **Web Server** | Apache 2.4+ or Nginx 1.18+ |
| **Application Runtime** | Node.js 16+ OR Python 3.9+ OR PHP 8.0+ |
| **Database** | MySQL 8.0+ OR PostgreSQL 12+ |
| **RAM** | Minimum: 4GB<br/>Recommended: 8GB+ |
| **Storage** | Minimum: 50GB SSD<br/>Recommended: 100GB+ SSD |
| **Processor** | 2+ CPU cores |

**Network Requirements:**
- HTTPS/TLS 1.2+ support (SSL certificate required)
- Outbound SMTP (port 587 or 465) for email
- Public internet access for users
- Domain name with DNS configuration

### 2.5 Design and Implementation Constraints

**Technical Constraints:**

**TC-1: Browser Compatibility**
- Must support modern browsers only (last 2 versions)
- No Internet Explorer support required
- Progressive enhancement approach for older browsers

**TC-2: Mobile Responsiveness**
- Must adapt to screens from 320px to 1920px width
- Touch-friendly interface elements (minimum 44x44px)
- Mobile-first CSS framework approach

**TC-3: Data Protection**
- Must comply with GDPR principles (data minimization, user consent)
- Must implement "Right to be Forgotten" (data deletion)
- Must use encrypted storage for sensitive data

**TC-4: Security Standards**
- Passwords must be hashed (bcrypt/Argon2, never plaintext)
- All communications over HTTPS only
- SQL injection prevention (parameterized queries)
- XSS prevention (input sanitization and output encoding)

**TC-5: Database Normalization**
- Minimum 3rd Normal Form (3NF) compliance
- Referential integrity enforced
- Indexed columns for search performance

**Business Constraints:**

**BC-1: Budget**
- Phase 1 development budget: $50,000
- No budget for paid third-party APIs in Phase 1
- Open-source tools preferred

**BC-2: Timeline**
- Must launch within 6 months from approval
- Beta testing must complete 2 weeks before launch
- MVP features only in Phase 1

**BC-3: Team Resources**
- 3 developers available
- 1 QA tester available
- Part-time UI/UX designer
- 1 admin moderator post-launch

**BC-4: Infrastructure**
- Hosting budget: $200/month maximum
- Must scale to 1,000 concurrent users without upgrade
- Backup and disaster recovery required

**Regulatory Constraints:**

**RC-1: Data Privacy**
- Privacy policy required before launch
- Cookie consent banner required (GDPR/CCPA)
- User data export functionality required
- Data retention policy (30 days for deleted accounts)

**RC-2: Legal Protection**
- Terms of Service required
- User agreement acceptance required at registration
- Disclaimer of liability for service quality
- Age restriction (users must be 18+)

**RC-3: Content Moderation**
- Prohibited content policy required
- Mechanism to report inappropriate content
- Admin review process for flagged content
- DMCA takedown procedure (if hosting user content)

**Design Conventions:**

**DC-1: Coding Standards**
- Follow language-specific style guides (PEP 8, PSR-12, Airbnb JS)
- Meaningful variable and function names
- Comments for complex logic
- Maximum function length: 50 lines

**DC-2: API Design**
- RESTful principles
- JSON response format
- HTTP status codes for responses
- API versioning (e.g., /api/v1/)

**DC-3: Database Naming**
- Table names: UPPERCASE with underscores
- Column names: lowercase with underscores
- Consistent naming patterns (created_at, updated_at)

### 2.6 Assumptions and Dependencies

**Assumptions:**

**User Assumptions:**
1. **A1:** Users have access to email for account verification and notifications
2. **A2:** Users have basic computer/smartphone literacy
3. **A3:** Customers will provide accurate service requirements in requests
4. **A4:** Providers will maintain truthful and current profile information
5. **A5:** Providers will respond to requests within 48 hours
6. **A6:** Users understand the platform is a marketplace, not a service provider
7. **A7:** Users have reliable internet connectivity for platform access

**System Assumptions:**
1. **A8:** Database server will maintain 99%+ uptime
2. **A9:** Email service provider will deliver messages with 95%+ success rate
3. **A10:** Hosting infrastructure can handle projected load
4. **A11:** SSL certificate will be renewed before expiration
5. **A12:** Backup systems will function correctly when needed

**Business Assumptions:**
1. **A13:** Admin team available for provider approval within 48 hours
2. **A14:** Marketing will drive initial user acquisition
3. **A15:** Community feedback will guide feature prioritization
4. **A16:** Platform liability is limited by Terms of Service
5. **A17:** Provider verification initially manual (automated later)

**Dependencies:**

**Critical Dependencies:**
1. **D1:** Availability of web hosting service (AWS, DigitalOcean, etc.)
2. **D2:** Availability of reliable SMTP email service
3. **D3:** Database management system (MySQL/PostgreSQL)
4. **D4:** SSL certificate authority availability
5. **D5:** Domain name registration and DNS services

**Development Dependencies:**
1. **D6:** Access to development/staging environments
2. **D7:** Version control system (Git/GitHub)
3. **D8:** Development framework selection approval
4. **D9:** Third-party library license compatibility
5. **D10:** Developer availability and skill sets

**Operational Dependencies:**
1. **D11:** Admin staff availability for moderation (8am-8pm)
2. **D12:** Customer support team for user issues
3. **D13:** Legal review of Terms of Service and Privacy Policy
4. **D14:** Content moderation guidelines and training
5. **D15:** Disaster recovery plan approval and testing

**Risk Mitigation:**
- For critical dependencies (D1-D5), maintain list of alternative vendors
- Document all external service API specifications
- Implement fallback mechanisms for email delivery failures
- Regular testing of backup and recovery procedures

---

## 3. System Models & Diagrams

This section presents comprehensive visual models of the system architecture, behavior, and data flows. These diagrams serve as the visual blueprint for development, testing, and stakeholder communication.

### 3.1 System Context Diagram

The **System Context Diagram** provides the highest level view of the system, showing the system boundary and its interactions with external entities.

**Diagram Reference:** See "System Context Diagram" artifact

**Description:**  
The system sits at the center with three primary external actors (Customer, Service Provider, Admin) and two external systems (Email Service, Web Browser). Data flows in both directions showing inputs and outputs.

**Key Interfaces:**
- **Customer Interface:** Bidirectional flow of search queries, requests, and results
- **Provider Interface:** Profile data input, request notifications output
- **Admin Interface:** Management actions input, system reports output
- **Email Service:** Outbound notification requests
- **Browser:** HTTP/HTTPS protocol communication

**Boundary Definition:**  
Everything inside the "Local Service Provider System" box is developed and maintained by the project team. Everything outside represents external dependencies.

### 3.2 Use Case Diagrams

**Use Case Diagrams** show functional requirements from the user's perspective. They identify actors, use cases (goals), and relationships between them.

**Diagram Reference:** See "Complete Use Case Diagrams" artifact

**Actor Descriptions:**

**Primary Actors:**
- **Customer:** Person seeking local services, interacts with search, booking, and review features
- **Service Provider:** Professional offering services, manages profile and responds to requests
- **System Admin:** Platform moderator ensuring quality and handling disputes

**Secondary Actors:**
- **Email System:** Automated actor handling notification delivery
- **Time System:** Automated actor triggering scheduled processes

**Use Case Categories:**

**Customer Use Cases (9 use cases):**
1. Register/Login - Account creation and authentication
2. Search Services - Keyword and filter-based discovery
3. Filter Results - Narrow search by criteria
4. View Provider Profile - Detailed provider information
5. Send Booking Request - Submit service request
6. Track Request Status - Monitor request lifecycle
7. Cancel Request - Withdraw pending request
8. Leave Review - Rate and review completed service
9. Manage Profile - Update personal information

**Provider Use Cases (11 use cases):**
1. Register as Provider - Initial provider onboarding
2. Login - Provider authentication
3. Create/Update Profile - Business information management
4. Add Services - Service catalog management
5. Manage Pricing - Price updates
6. View Requests - Incoming request inbox
7. Accept Request - Agree to provide service
8. Decline Request - Refuse service request
9. Mark Job Complete - Signal completion
10. View Reviews - Monitor reputation
11. Update Availability - Set working hours

**Admin Use Cases (9 use cases):**
1. Login to Admin - Admin authentication
2. Approve Providers - Verify and activate providers
3. Reject Providers - Deny provider applications
4. Manage Users - User account administration
5. Moderate Reviews - Content quality control
6. View Reports - System analytics
7. Deactivate Accounts - Suspend users/providers
8. View Audit Logs - Track administrative actions
9. Manage Services - System service catalog

**Relationships:**
- `<<includes>>`: Shared functionality (e.g., all operations include authentication)
- `<<extends>>`: Optional variations (e.g., advanced search extends basic search)

### 3.3 Data Flow Diagrams

Data Flow Diagrams (DFDs) show how data moves through the system, from input to processing to storage.

#### 3.3.1 Context Diagram (Level 0 DFD)

**Diagram Reference:** See "Data Flow Diagram - Level 0" artifact

**Description:**  
The highest level DFD showing the system as a single process with external entities and major data flows.

**External Entities:**
- Customer (source/sink)
- Service Provider (source/sink)
- Admin (source/sink)

**Major Data Flows:**
- Registration Data, Search Queries (Customer → System)
- Search Results, Notifications (System → Customer)
- Profile Data, Responses (Provider → System)
- Requests, Reviews (System → Provider)
- Approvals, Actions (Admin → System)
- Reports, Alerts (System → Admin)

#### 3.3.2 Level 1 DFD

**Diagram Reference:** See "Data Flow Diagram - Level 1" artifact

**Description:**  
Decomposes Process 0 into major subsystems showing internal data flows and data stores.

**Processes:**
1. **User Management (1.0):** Handles registration, login, authentication
2. **Service Discovery (2.0):** Processes searches, filters, results ranking
3. **Booking Management (3.0):** Request lifecycle management
4. **Provider Management (4.0):** Provider profiles, services, verification
5. **Review System (5.0):** Rating and review handling
6. **Admin Control (6.0):** Moderation and system administration
7. **Notification Service (7.0):** Email notification generation

**Data Stores:**
- **D1: Users** - User account information
- **D2: Providers** - Provider profiles
- **D3: Services** - Service catalog
- **D4: Requests** - Booking requests
- **D5: Reviews** - Ratings and reviews
- **D6: Notifications** - Notification logs

**Key Data Flows:**
- User data flows between User Management and Users database
- Search queries flow to Service Discovery which reads from Providers and Services
- Booking requests create entries in Requests database and trigger Notifications
- Reviews link Users, Providers, and Requests

**Data Flow Validation:**
All data flows are balanced: data entering a process must either be stored, transformed, or output. No data appears or disappears without accounting.

### 3.4 Sequence Diagrams

Sequence diagrams show interactions between system components over time, focusing on message sequences.

#### 3.4.1 Booking Process Sequence

**Diagram Reference:** See "Sequence Diagram - Booking Process" artifact

**Scenario:** Complete booking flow from search to job completion

**Participants:**
1. Customer (Actor)
2. Web Interface (Presentation Layer)
3. Auth Service (Security)
4. Booking Service (Business Logic)
5. Database (Data Layer)
6. Notification Service (Communication)
7. Email Service (External)
8. Provider (Actor)

**Message Flow:**

**Phase 1: Service Discovery**
1. Customer searches for service
2. System queries database for providers
3. Results displayed with profiles and reviews

**Phase 2: Request Submission**
4. Customer views provider profile
5. Customer clicks "Request Service"
6. System verifies authentication
7. Customer fills booking form
8. System creates request (status: pending)
9. Notification triggered to provider

**Phase 3: Provider Response**
10. Provider logs in to dashboard
11. System shows pending requests
12. Provider accepts request
13. System updates status to "accepted"
14. Notification sent to customer

**Phase 4: Completion**
15. Provider marks job complete
16. System updates status to "completed"
17. Review reminder sent to customer

**Timing Considerations:**
- Total response time from search to results: < 2 seconds
- Request submission confirmation: < 1 second
- Notification delivery: < 5 minutes (depends on email service)

**Error Scenarios (not shown in main diagram):**
- Session timeout → redirect to login
- Database error → show error message, log incident
- Email delivery failure → retry mechanism, log for admin review

### 3.5 State Transition Diagrams

State diagrams show the lifecycle of key entities and valid transitions between states.

#### 3.5.1 Request Status State Machine

**Diagram Reference:** See "State Transition Diagram - Request Status" artifact

**States:**

| State | Description | Entry Condition | Exit Condition |
|-------|-------------|-----------------|----------------|
| **Pending** | Initial state after customer submission | Request created | Provider responds or customer cancels |
| **Accepted** | Provider agrees to fulfill | Provider accepts | Job completes or cancelled |
| **In Progress** | Work underway (optional) | Work starts | Job completes or cancelled |
| **Declined** | Provider cannot fulfill | Provider declines | Final state |
| **Cancelled** | Request terminated | Either party cancels | Final state |
| **Completed** | Service delivered | Provider marks done | Customer reviews or timeout |
| **Reviewed** | Customer provided feedback | Review submitted | Final state |

**Transitions:**

| From State | Event | To State | Actor |
|------------|-------|----------|-------|
| [Start] | Submit request | Pending | Customer |
| Pending | Provider accepts | Accepted | Provider |
| Pending | Provider declines | Declined | Provider |
| Pending | Customer cancels | Cancelled | Customer |
| Accepted | Work begins | In Progress | Provider |
| Accepted | Customer cancels | Cancelled | Customer |
| In Progress | Job done | Completed | Provider |
| In Progress | Mutual cancel | Cancelled | Both |
| Completed | Review submitted | Reviewed | Customer |
| Completed | 30 days timeout | [End] | System |

**Business Rules:**
- Requests cannot move backward in lifecycle (no "undo" completion)
- Only pending requests can be cancelled by customer
- Accepted requests require mutual agreement to cancel
- Completed requests remain in system for historical tracking
- Maximum time in Pending: 48 hours (then auto-expired)

#### 3.5.2 Provider Approval State Machine

**Diagram Reference:** See "State Transition Diagram - Provider Approval" artifact

**States:**

| State | Description | Visibility |
|-------|-------------|------------|
| **Draft** | Incomplete profile | Admin only |
| **Submitted** | Awaiting admin review | Admin only |
| **Under Review** | Admin is evaluating | Admin only |
| **On Hold** | Needs more information | Admin + Provider |
| **Approved** | Verification complete | All |
| **Active** | Live and taking requests | All |
| **Suspended** | Temporarily disabled | Admin only |
| **Inactive** | Provider self-disabled | Admin + Provider |
| **Rejected** | Permanently denied | Admin + Provider |

**Transitions:**

| From State | Event | To State | Actor | Notes |
|------------|-------|----------|-------|-------|
| [Start] | Begin registration | Draft | Provider | |
| Draft | Submit for approval | Submitted | Provider | Validation required |
| Submitted | Admin starts review | Under Review | Admin | |
| Under Review | Approve | Approved | Admin | Notification sent |
| Under Review | Request info | On Hold | Admin | Email to provider |
| Under Review | Deny | Rejected | Admin | Reason required |
| On Hold | Provide info | Submitted | Provider | Re-enters queue |
| On Hold | Give up | Rejected | Provider | |
| Approved | Make live | Active | System | Auto after approval |
| Active | Policy violation | Suspended | Admin | Investigation |
| Active | Provider deactivates | Inactive | Provider | Temporary |
| Suspended | Issue resolved | Active | Admin | |
| Suspended | Permanent ban | Rejected | Admin | |
| Inactive | Provider reactivates | Active | Provider | |

**Time Limits:**
- Submitted → Under Review: 48 hours max
- On Hold → Rejected: 7 days if no response
- Active → Suspended: Immediate upon violation

### 3.6 Activity Diagrams

Activity diagrams show workflows and business process flows with decision points.

#### 3.6.1 Service Search Workflow

**Diagram Reference:** See "Activity Diagram - Service Search Flow" artifact

**Workflow Description:**

**Start:** User opens platform

**Swimlanes:**
- User Actions
- System Processing
- Decision Points

**Flow Steps:**

1. **Enter Search Query**
   - User types keywords
   - System captures input

2. **Apply Filters? (Decision)**
   - Yes → User selects filters (service type, location, price, rating)
   - No → Proceed to search

3. **Execute Search**
   - System queries database
   - Applies filters and relevance ranking
   - Response time: < 2 seconds

4. **Results Found? (Decision)**
   - No → Display "No providers found"
     - Suggest broader criteria
     - User can modify search or exit
   - Yes → Display provider cards

5. **Apply Sorting? (Decision)**
   - Yes → Sort by relevance, rating, price, or distance
   - No → Default sort (relevance)

6. **User Action? (Decision)**
   - View Profile → Opens provider detail page
     - User decides if interested
       - Not interested → Back to results
       - Interested → Check authentication
         - Not logged in → Show login prompt
           - Login success → Proceed to request
           - Login fail → Return to profile
         - Logged in → Send booking request
   - Refine Search → Return to filters
   - Exit → End session

**Parallel Activities:**
- Search indexing (background)
- Analytics tracking (background)
- Cache updates (background)

**Exception Handling:**
- Database error → Show error message, log incident
- Timeout → Show timeout message, retry option
- No JavaScript → Degrade gracefully with server-side search

### 3.7 System Architecture Diagram

**Diagram Reference:** See "System Architecture Diagram" artifact

**Architecture Pattern:** Three-Tier Architecture with Service Layer

**Layer Descriptions:**

#### Layer 1: Presentation Layer (Client-Side)

**Components:**
- **Web Browser:** User's browser application
- **User Interface:** HTML/CSS/JavaScript
  - Responsive layouts (Bootstrap/Tailwind CSS)
  - Form validation
  - Dynamic content updates
  - Session management

**Technologies:**
- HTML5, CSS3, JavaScript (ES6+)
- Framework: React/Vue.js OR vanilla JavaScript
- AJAX for asynchronous requests
- LocalStorage for client-side caching

**Responsibilities:**
- Render UI components
- Handle user input
- Validate form data (client-side)
- Make API calls to backend
- Display responses and errors

#### Layer 2: Application Layer (Server-Side)

**Web Server:**
- Apache HTTP Server 2.4+ OR Nginx 1.18+
- Handles incoming HTTP/HTTPS requests
- Routes to application services
- Serves static files (CSS, JS, images)
- SSL/TLS termination

**Application Services (Microservices or Modules):**

1. **Authentication Service**
   - User login/logout
   - Session management
   - Token validation
   - Password reset

2. **User Management Service**
   - Registration
   - Profile CRUD operations
   - Role management

3. **Search & Discovery Service**
   - Query processing
   - Filter application
   - Result ranking
   - Caching frequently searched queries

4. **Booking Management Service**
   - Request creation
   - Status updates
   - Request history

5. **Provider Management Service**
   - Provider profile CRUD
   - Service catalog management
   - Approval workflow

6. **Review System Service**
   - Review submission
   - Rating calculation
   - Moderation

7. **Admin Control Service**
   - User/provider management
   - Content moderation
   - Reports generation

8. **Notification Service**
   - Email composition
   - Notification queuing
   - Delivery tracking

**Technologies:**
- Runtime: Node.js 16+ OR Python 3.9+ OR PHP 8.0+
- Framework: Express.js OR Django/Flask OR Laravel
- RESTful API design
- JSON data format
- JWT for authentication

#### Layer 3: Data Layer

**Database Server:**
- **Primary Database:** MySQL 8.0 OR PostgreSQL 12+
- **Tables:** Users, Providers, Services, Requests, Reviews, etc.
- **Indexing:** Strategic indexes on search columns
- **Transactions:** ACID compliance for critical operations
- **Replication:** Master-slave setup (future)

**File Storage:**
- Profile photos, documents
- Local filesystem OR AWS S3/equivalent
- Access control and validation

**Cache Layer (Optional but Recommended):**
- Redis for session storage
- Query result caching
- Reduces database load

**Technologies:**
- MySQL 8.0+ OR PostgreSQL 12+
- Connection pooling
- Prepared statements (SQL injection prevention)
- Backup automation

#### External Services Layer

**Email Service:**
- SMTP integration
- Providers: SendGrid, AWS SES, Mailgun
- Template management
- Delivery tracking

**Future Integrations:**
- SMS Gateway (Twilio)
- Payment Gateway (Stripe, PayPal)
- Map Services (Google Maps API)
- Background Check APIs

**Communication Patterns:**

- **Client ↔ Web Server:** HTTPS/REST API
- **Web Server ↔ Application Services:** Internal API calls
- **Application Services ↔ Database:** SQL over secure connection
- **Application Services ↔ Cache:** Redis protocol
- **Application Services ↔ Email:** SMTP/API
- **Application Services ↔ File Storage:** File system API or S3 API

**Scalability Considerations:**
- Horizontal scaling: Add more web servers behind load balancer
- Database read replicas for search queries
- CDN for static assets
- Caching layer to reduce database load

**Security Layers:**
- HTTPS encryption (all external communication)
- Firewall rules (only necessary ports open)
- Database access restricted to application layer
- Secrets management (environment variables, not code)

### 3.8 Deployment Diagram

**Diagram Reference:** See "Deployment Diagram" artifact

**Infrastructure Overview:**

The system is deployed across multiple tiers with redundancy and load balancing for high availability.

#### User Devices Tier

**Components:**
- Desktop computers (Windows, macOS, Linux)
- Mobile devices (iOS, Android)
- Tablets (iPad, Android tablets)

**Connection:**
- HTTPS over public internet
- CDN for static assets (faster load times)

#### Internet / CDN Tier

**Load Balancer:**
- **Purpose:** Distribute traffic across multiple web servers
- **Technology:** Nginx, HAProxy, or cloud-native (AWS ELB, Azure Load Balancer)
- **Features:**
  - Health checking
  - SSL termination
  - Traffic routing
  - DDoS protection

**Content Delivery Network (CDN):**
- **Purpose:** Serve static assets (CSS, JS, images) from edge locations
- **Technology:** CloudFlare, AWS CloudFront, Azure CDN
- **Benefits:**
  - Reduced latency
  - Bandwidth savings
  - Improved performance

#### Web Server Tier (Multiple Instances)

**Configuration:**
- 2+ web server instances for redundancy
- Each running: Nginx + Application Server
- Auto-scaling based on load (cloud environments)
- Session affinity OR stateless sessions (JWT)

**Server Specs:**
- 2-4 CPU cores
- 4-8 GB RAM
- 50 GB SSD storage
- Ubuntu 20.04 LTS or equivalent

#### Application Tier (Microservices)

**Service Deployment:**
- Containerized services (Docker) OR
- Monolithic application with service modules
- Each service can scale independently
- API Gateway pattern for routing

**Services:**
- Auth, Booking, Search, Notification (see Architecture Diagram)
- Deployed across 2+ application servers
- Service discovery (if microservices architecture)

#### Data Tier (Persistent Storage)

**Primary Database:**
- MySQL 8.0 Master instance
- High availability configuration
- Regular backups (daily full, hourly incremental)

**Replica Database:**
- Read replicas for search queries
- Reduces load on master
- Asynchronous replication

**Redis Cache:**
- In-memory data store
- Session storage
- Query result caching
- Pub/sub for real-time features (future)

**File Server:**
- Dedicated storage for uploads
- Local filesystem OR S3-compatible storage
- Backup and versioning enabled

#### External Services Tier

**Email Provider:**
- SendGrid, AWS SES, or Mailgun
- API integration
- Webhook for delivery tracking

**Monitoring Service:**
- New Relic, DataDog, or Prometheus + Grafana
- Application performance monitoring
- Server health metrics
- Alerting on issues

**Backup Service:**
- Automated database backups
- Offsite storage (different region/provider)
- Retention policy: 30 days
- Disaster recovery plan

**Deployment Environments:**

| Environment | Purpose | Configuration |
|-------------|---------|---------------|
| **Development** | Active development | Single server, mock services |
| **Staging** | Pre-production testing | Mirror of production, test data |
| **Production** | Live system | Full redundancy, real data |

**Deployment Process:**
1. Code commit to version control (Git)
2. CI/CD pipeline triggers (GitHub Actions, Jenkins)
3. Automated tests run
4. Build artifacts created
5. Deploy to staging for QA
6. Manual approval for production
7. Blue-green deployment OR rolling update
8. Health checks and monitoring

**Network Configuration:**

**Firewall Rules:**
- Port 443 (HTTPS) open to public
- Port 80 (HTTP) redirect to 443
- Port 3306/5432 (database) restricted to application tier
- Port 6379 (Redis) restricted to application tier
- SSH (22) restricted to admin IPs only

**Security Groups:**
- Web tier: Allow HTTPS from internet
- App tier: Allow traffic from web tier only
- Data tier: Allow traffic from app tier only

---

## 4. Specific Requirements

### 4.1 Functional Requirements Summary

This section provides a comprehensive inventory of all functional requirements organized by feature area.

| Requirement ID | Feature Area | Priority | User Story | Acceptance Criteria |
|----------------|--------------|----------|------------|---------------------|
| FR-1.1 to FR-1.4 | User Registration & Auth | High | As a user, I want to create an account so I can use the platform | AC-1.1 to AC-1.4 |
| FR-2.1 to FR-2.4 | Service Discovery | High | As a customer, I want to search for services so I can find providers | AC-2.1 to AC-2.4 |
| FR-3.1 to FR-3.4 | Provider Profile | High | As a provider, I want to manage my profile so customers can find me | AC-3.1 to AC-3.4 |
| FR-4.1 to FR-4.5 | Booking Requests | High | As a customer, I want to request services so I can hire providers | AC-4.1 to AC-4.5 |
| FR-5.1 to FR-5.4 | Review System | High | As a customer, I want to review providers so others can benefit | AC-5.1 to AC-5.4 |
| FR-6.1 to FR-6.5 | Admin Dashboard | High | As an admin, I want to manage the platform so quality is maintained | AC-6.1 to AC-6.5 |
| FR-7.1 to FR-7.3 | Notifications | Medium | As a user, I want to receive updates so I stay informed | AC-7.1 to AC-7.3 |

*(Detailed requirements in Section 8)*

---

## 5. Data Requirements

### 5.1 Logical Data Model

**Diagram Reference:** See "Complete Entity Relationship Diagram" artifact

**Entity Descriptions:**

The system's data model consists of 12 core entities with defined relationships:

#### Core Entities

**1. USERS (Central entity)**
- **Purpose:** Stores all user accounts regardless of role
- **Key Attributes:** id, name, email, password_hash, role, is_active
- **Relationships:**
  - One user may become one provider (1:0..1)
  - One user creates many requests (1:N)
  - One user writes many reviews (1:N)
  - One user has many sessions (1:N)
  - One user receives many notifications (1:N)

**2. PROVIDERS**
- **Purpose:** Extended profile for service providers
- **Key Attributes:** id, user_id, business_name, approval_status, avg_rating
- **Relationships:**
  - Linked to exactly one user (1:1)
  - Offers many services (1:N via PROVIDER_SERVICES)
  - Receives many requests (1:N)
  - Receives many reviews (1:N)
  - Sets availability schedules (1:N)

**3. SERVICES**
- **Purpose:** Catalog of service types (e.g., Plumbing, Electrical)
- **Key Attributes:** id, name, category, is_active
- **Relationships:**
  - Listed by many providers (M:N via PROVIDER_SERVICES)
  - Requested in many bookings (1:N)

**4. PROVIDER_SERVICES (Junction Table)**
- **Purpose:** Links providers to services with pricing
- **Key Attributes:** id, provider_id, service_id, base_price, is_available
- **Relationships:**
  - Bridges PROVIDERS and SERVICES (M:N relationship)

**5. REQUESTS**
- **Purpose:** Booking requests from customers to providers
- **Key Attributes:** id, user_id, provider_id, service_id, status, preferred_date
- **Relationships:**
  - Created by one customer (N:1 to USERS)
  - Received by one provider (N:1 to PROVIDERS)
  - For one service (N:1 to SERVICES)
  - May have one review (1:0..1 to REVIEWS)
  - Has many status changes (1:N to REQUEST_HISTORY)

**6. REVIEWS**
- **Purpose:** Customer feedback for completed services
- **Key Attributes:** id, user_id, provider_id, request_id, rating, comment
- **Relationships:**
  - Written by one customer (N:1 to USERS)
  - For one provider (N:1 to PROVIDERS)
  - About one request (1:1 with REQUESTS)

#### Supporting Entities

**7. SESSIONS**
- **Purpose:** User authentication sessions
- **Key Attributes:** id, user_id, session_token, expires_at

**8. NOTIFICATIONS**
- **Purpose:** System notifications to users
- **Key Attributes:** id, user_id, type, message, is_read

**9. AVAILABILITY**
- **Purpose:** Provider working hours
- **Key Attributes:** id, provider_id, day_of_week, start_time, end_time

**10. REQUEST_HISTORY**
- **Purpose:** Audit trail of request status changes
- **Key Attributes:** id, request_id, old_status, new_status, changed_at

**11. ADMIN_USERS**
- **Purpose:** Admin role assignments
- **Key Attributes:** id, user_id, permission_level

**12. AUDIT_LOGS**
- **Purpose:** Admin action tracking
- **Key Attributes:** id, admin_id, action_type, entity_type, entity_id

### 5.2 Data Dictionary

**Complete Table Definitions:**

#### DR-1: USERS Table

| Column | Data Type | Constraints | Description | Example |
|--------|-----------|-------------|-------------|---------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Unique user identifier | 1001 |
| name | VARCHAR(100) | NOT NULL | Full name | "John Smith" |
| email | VARCHAR(255) | NOT NULL, UNIQUE | Email address | "john@example.com" |
| password_hash | VARCHAR(255) | NOT NULL | Hashed password (bcrypt) | "$2b$12$..." |
| phone | VARCHAR(20) | NULL | Contact number | "+1-555-0123" |
| role | ENUM | NOT NULL | customer, provider, admin | "customer" |
| is_active | BOOLEAN | DEFAULT TRUE | Account status | TRUE |
| email_verified | BOOLEAN | DEFAULT FALSE | Verification status | TRUE |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Registration date | "2026-01-15 10:30:00" |
| updated_at | TIMESTAMP | ON UPDATE CURRENT_TIMESTAMP | Last modification | "2026-01-20 14:20:00" |

**Indexes:**
- PRIMARY KEY (id)
- UNIQUE INDEX (email)
- INDEX (role, is_active) - For user listings
- INDEX (email_verified) - For verification checks

**Business Rules:**
- Email must be valid format (validated server-side)
- Password minimum 8 characters, must include uppercase, lowercase, number
- Phone format validated if provided
- Role cannot be changed once set (security)
- Soft delete: is_active = FALSE instead of physical deletion

#### DR-2: PROVIDERS Table

| Column | Data Type | Constraints | Description | Example |
|--------|-----------|-------------|-------------|---------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Provider identifier | 2001 |
| user_id | INT | NOT NULL, UNIQUE, FOREIGN KEY | Links to USERS | 1001 |
| business_name | VARCHAR(200) | NULL | Business name | "Smith Plumbing Co." |
| about | TEXT | NULL | Profile description | "20 years experience..." |
| address | VARCHAR(500) | NULL | Service address | "123 Main St, City" |
| years_experience | INT | NULL | Years in business | 15 |
| profile_photo | VARCHAR(500) | NULL | Photo file path | "/uploads/profile_2001.jpg" |
| approval_status | ENUM | DEFAULT 'pending' | pending, approved, rejected | "approved" |
| is_visible | BOOLEAN | DEFAULT TRUE | Profile visibility | TRUE |
| avg_rating | DECIMAL(3,2) | DEFAULT 0.00 | Average rating | 4.75 |
| total_reviews | INT | DEFAULT 0 | Review count | 42 |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Profile creation | "2026-01-16 09:00:00" |
| updated_at | TIMESTAMP | ON UPDATE CURRENT_TIMESTAMP | Last update | "2026-01-25 11:30:00" |

**Indexes:**
- PRIMARY KEY (id)
- FOREIGN KEY (user_id) REFERENCES USERS(id) ON DELETE CASCADE
- INDEX (approval_status, is_visible) - For searches
- INDEX (avg_rating DESC) - For sorting by rating

**Business Rules:**
- Only approved providers visible in search
- avg_rating calculated automatically from REVIEWS
- profile_photo validated (max 5MB, JPG/PNG only)
- Address required for approval
- Approval_status changes logged in AUDIT_LOGS

#### DR-3: SERVICES Table

| Column | Data Type | Constraints | Description | Example |
|--------|-----------|-------------|-------------|---------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Service identifier | 3001 |
| name | VARCHAR(100) | NOT NULL, UNIQUE | Service name | "Plumbing" |
| description | TEXT | NULL | Service description | "Residential plumbing..." |
| category | VARCHAR(100) | NULL | Service category | "Home Services" |
| icon | VARCHAR(255) | NULL | Icon file path | "/icons/plumbing.svg" |
| is_active | BOOLEAN | DEFAULT TRUE | Service availability | TRUE |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Creation date | "2026-01-10 08:00:00" |

**Indexes:**
- PRIMARY KEY (id)
- UNIQUE INDEX (name)
- INDEX (category, is_active) - For categorized listings

**Business Rules:**
- Service names must be unique
- Only active services shown in provider forms
- Admin-only CRUD operations
- Cannot delete services with active PROVIDER_SERVICES links

#### DR-4: PROVIDER_SERVICES Table

| Column | Data Type | Constraints | Description | Example |
|--------|-----------|-------------|-------------|---------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Record identifier | 4001 |
| provider_id | INT | NOT NULL, FOREIGN KEY | Links to PROVIDERS | 2001 |
| service_id | INT | NOT NULL, FOREIGN KEY | Links to SERVICES | 3001 |
| base_price | DECIMAL(10,2) | NOT NULL | Starting price | 75.00 |
| price_unit | VARCHAR(50) | DEFAULT 'per hour' | Price unit | "per hour" |
| description | TEXT | NULL | Service details | "Emergency available..." |
| is_available | BOOLEAN | DEFAULT TRUE | Current availability | TRUE |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Addition date | "2026-01-16 10:00:00" |
| updated_at | TIMESTAMP | ON UPDATE CURRENT_TIMESTAMP | Last update | "2026-01-20 15:30:00" |

**Indexes:**
- PRIMARY KEY (id)
- FOREIGN KEY (provider_id) REFERENCES PROVIDERS(id) ON DELETE CASCADE
- FOREIGN KEY (service_id) REFERENCES SERVICES(id) ON DELETE CASCADE
- UNIQUE INDEX (provider_id, service_id) - Prevent duplicates

**Business Rules:**
- Provider can only add services once approved
- base_price must be positive
- is_available allows temporary service suspension
- Shown in provider profile and search results

#### DR-5: REQUESTS Table

| Column | Data Type | Constraints | Description | Example |
|--------|-----------|-------------|-------------|---------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Request identifier | 5001 |
| user_id | INT | NOT NULL, FOREIGN KEY | Customer who sent | 1001 |
| provider_id | INT | NOT NULL, FOREIGN KEY | Provider receiving | 2001 |
| service_id | INT | NULL, FOREIGN KEY | Service requested | 3001 |
| description | TEXT | NOT NULL | Job description | "Kitchen sink leak..." |
| preferred_date | DATE | NULL | Preferred service date | "2026-02-01" |
| preferred_time | TIME | NULL | Preferred service time | "14:00:00" |
| status | ENUM | DEFAULT 'pending' | pending, accepted, declined, completed, cancelled | "accepted" |
| decline_reason | TEXT | NULL | Reason if declined | "Booked that week" |
| estimated_cost | DECIMAL(10,2) | NULL | Provider's estimate | 150.00 |
| request_time | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Request submission | "2026-01-25 13:45:00" |
| accepted_at | TIMESTAMP | NULL | Acceptance timestamp | "2026-01-25 15:20:00" |
| completed_at | TIMESTAMP | NULL | Completion timestamp | "2026-02-01 16:00:00" |
| updated_at | TIMESTAMP | ON UPDATE CURRENT_TIMESTAMP | Last status change | "2026-02-01 16:00:00" |

**Indexes:**
- PRIMARY KEY (id)
- FOREIGN KEY (user_id) REFERENCES USERS(id) ON DELETE CASCADE
- FOREIGN KEY (provider_id) REFERENCES PROVIDERS(id) ON DELETE CASCADE
- FOREIGN KEY (service_id) REFERENCES SERVICES(id) ON DELETE SET NULL
- INDEX (user_id, status) - For customer dashboard
- INDEX (provider_id, status) - For provider dashboard
- INDEX (status, updated_at) - For admin monitoring

**Business Rules:**
- Status changes tracked in REQUEST_HISTORY
- Only pending requests can be accepted/declined
- Only accepted requests can be completed
- Completed requests trigger review invitation
- Cancelled requests require mutual agreement if accepted

#### DR-6: REVIEWS Table

| Column | Data Type | Constraints | Description | Example |
|--------|-----------|-------------|-------------|---------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Review identifier | 6001 |
| user_id | INT | NOT NULL, FOREIGN KEY | Reviewer (customer) | 1001 |
| provider_id | INT | NOT NULL, FOREIGN KEY | Provider reviewed | 2001 |
| request_id | INT | NULL, FOREIGN KEY, UNIQUE | Associated request | 5001 |
| rating | INT | NOT NULL, CHECK (1-5) | Star rating | 5 |
| comment | TEXT | NULL | Written review | "Excellent service..." |
| is_visible | BOOLEAN | DEFAULT TRUE | Visibility status | TRUE |
| is_flagged | BOOLEAN | DEFAULT FALSE | Flagged for review | FALSE |
| flag_reason | VARCHAR(255) | NULL | Reason if flagged | "Inappropriate language" |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Review submission | "2026-02-02 10:00:00" |
| reviewed_at | TIMESTAMP | NULL | Admin review timestamp | NULL |

**Indexes:**
- PRIMARY KEY (id)
- FOREIGN KEY (user_id) REFERENCES USERS(id) ON DELETE CASCADE
- FOREIGN KEY (provider_id) REFERENCES PROVIDERS(id) ON DELETE CASCADE
- FOREIGN KEY (request_id) REFERENCES REQUESTS(id) ON DELETE SET NULL
- UNIQUE INDEX (request_id) - One review per request
- INDEX (provider_id, is_visible) - For profile display

**Business Rules:**
- Rating must be 1-5 stars
- Comment limited to 500 characters
- Only completed requests can be reviewed
- One review per request (enforced by unique constraint)
- Auto-updates provider's avg_rating via trigger
- Flagged reviews hidden until admin review

#### DR-7: SESSIONS Table

| Column | Data Type | Constraints | Description | Example |
|--------|-----------|-------------|-------------|---------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Session identifier | 7001 |
| user_id | INT | NOT NULL, FOREIGN KEY | User owning session | 1001 |
| session_token | VARCHAR(255) | NOT NULL, UNIQUE | Unique session token | "a1b2c3d4..." |
| ip_address | VARCHAR(45) | NULL | User's IP address | "192.168.1.100" |
| user_agent | TEXT | NULL | Browser information | "Mozilla/5.0..." |
| expires_at | TIMESTAMP | NOT NULL | Expiration time | "2026-01-30 13:45:00" |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Session start | "2026-01-29 13:45:00" |

**Indexes:**
- PRIMARY KEY (id)
- FOREIGN KEY (user_id) REFERENCES USERS(id) ON DELETE CASCADE
- UNIQUE INDEX (session_token)
- INDEX (expires_at) - For cleanup jobs

**Business Rules:**
- Session expires after 24 hours of inactivity
- Expired sessions cleaned up daily
- Session token cryptographically secure (UUID or JWT)
- Multiple concurrent sessions allowed (e.g., mobile + desktop)

#### DR-8: NOTIFICATIONS Table

| Column | Data Type | Constraints | Description | Example |
|--------|-----------|-------------|-------------|---------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Notification ID | 8001 |
| user_id | INT | NOT NULL, FOREIGN KEY | Recipient | 1001 |
| type | VARCHAR(50) | NOT NULL | request_accepted, job_complete, etc. | "request_accepted" |
| title | VARCHAR(200) | NOT NULL | Notification title | "Request Accepted!" |
| message | TEXT | NOT NULL | Notification body | "John Smith accepted..." |
| is_read | BOOLEAN | DEFAULT FALSE | Read status | FALSE |
| related_entity | VARCHAR(50) | NULL | Entity type | "request" |
| related_id | INT | NULL | Entity ID | 5001 |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Notification time | "2026-01-25 15:20:00" |
| read_at | TIMESTAMP | NULL | Read timestamp | NULL |

**Indexes:**
- PRIMARY KEY (id)
- FOREIGN KEY (user_id) REFERENCES USERS(id) ON DELETE CASCADE
- INDEX (user_id, is_read) - For user notification center
- INDEX (created_at) - For sorting

**Business Rules:**
- Notifications also sent via email
- In-app notifications retained for 30 days
- Unread count displayed in UI badge
- Clicking notification marks as read

*(Additional supporting tables: AVAILABILITY, REQUEST_HISTORY, ADMIN_USERS, AUDIT_LOGS defined similarly)*

### 5.3 Data Integrity and Constraints

**Referential Integrity:**
- All foreign keys enforce CASCADE on delete or SET NULL where appropriate
- No orphaned records allowed
- Transactions ensure atomicity of related operations

**Data Validation:**
- Email format validation (regex pattern)
- Phone format validation (international support)
- URL validation for profile photos
- Enum validation for status fields
- Range validation for ratings (1-5)
- Date validation (no past dates for preferred_date)

**Business Constraints:**
- Users cannot review their own services
- Providers cannot send requests to themselves
- Only completed requests can be reviewed
- Providers must be approved before appearing in search
- Admin users must reference existing user_id

### 5.4 Data Volume and Growth Estimates

**Initial Estimates (Year 1):**

| Entity | Initial | 6 Months | 12 Months | Growth Rate |
|--------|---------|----------|-----------|-------------|
| Users | 100 | 1,000 | 5,000 | ~40%/month |
| Providers | 20 | 200 | 800 | ~35%/month |
| Services | 15 | 20 | 25 | ~5%/month |
| Requests | 50 | 2,000 | 10,000 | ~50%/month |
| Reviews | 30 | 1,200 | 6,000 | ~45%/month |
| Sessions | 500 | 5,000 | 25,000 | ~40%/month |

**Storage Calculations:**

Average row sizes:
- Users: 500 bytes
- Providers: 1 KB
- Requests: 800 bytes
- Reviews: 600 bytes
- Sessions: 400 bytes

Year 1 estimated database size: ~2 GB
Year 2 estimated database size: ~8 GB
Year 3 estimated database size: ~25 GB

**Scalability Strategy:**
- Database partitioning by date (requests, reviews)
- Archiving old data (>2 years) to cold storage
- Read replicas for search queries
- Caching frequently accessed data

---

## 6. External Interface Requirements

### 6.1 User Interfaces

**UI-1: General Interface Requirements**

**Priority:** High

**Requirements:**
- Responsive design supporting 320px to 1920px viewport widths
- Mobile-first approach with progressive enhancement
- Consistent navigation across all pages
- Accessible design (WCAG 2.1 Level AA compliance)
- Clear visual hierarchy using typography and spacing
- Maximum 3 clicks to any feature from home page

**Design Principles:**
- Simplicity: Minimize cognitive load
- Consistency: Reuse UI patterns
- Feedback: Immediate response to user actions
- Error Prevention: Validate inputs, confirm destructive actions
- Accessibility: Keyboard navigation, screen reader support

**UI-2: Color Scheme and Typography**

**Colors:**
- Primary: #2196F3 (Blue) - Call-to-action buttons, links
- Secondary: #4CAF50 (Green) - Success messages, approvals
- Warning: #FF9800 (Orange) - Warnings, pending states
- Error: #F44336 (Red) - Error messages, rejections
- Neutral: #FAFAFA (Light Gray) - Backgrounds
- Text: #212121 (Dark Gray) - Primary text
- Text Secondary: #757575 (Medium Gray) - Secondary text

**Typography:**
- Headings: Sans-serif (Roboto, Open Sans, or system default)
- Body: Sans-serif, 16px base size (readable on mobile)
- Line Height: 1.5 for body text
- Font Weights: Regular (400), Medium (500), Bold (700)

**UI-3: Screen Descriptions**

#### UI-3.1: Home / Landing Page

**Purpose:** First impression, value proposition, search entry point

**Layout:**
```
+------------------+
| Logo | Nav Menu  |
+------------------+
|   Hero Section   |
| [Search Bar]     |
+------------------+
| How It Works     |
| (3 step process) |
+------------------+
| Featured Providers|
| (6 provider cards)|
+------------------+
| Categories       |
| (Service types)  |
+------------------+
| Footer           |
+------------------+
```

**Components:**
- **Header:** Logo (left), Navigation links (right: Search, Login, Sign Up)
- **Hero:** Large heading, subheading, search bar with "Find Services" button
- **How It Works:** 3 cards with icons (Search → Connect → Hire)
- **Featured Providers:** 6 provider cards with photo, name, rating, service
- **Categories:** 8-12 service category buttons with icons
- **Footer:** Links (About, Terms, Privacy, Contact), Social media icons

**Interactions:**
- Search bar auto-complete suggestions
- Category buttons navigate to filtered search
- Provider cards link to profile pages
- Smooth scrolling for anchor links

#### UI-3.2: Search Results Page

**Purpose:** Display providers matching search criteria

**Layout:**
```
+------------------+
| Logo | Nav |User|
+------------------+
| [Search Bar]     |
+------------------+
| Filters | Results|
| (left)  | (right)|
|         | Sort:  |
|         | [Cards]|
|         | [...]  |
|         | Pagination|
+------------------+
```

**Filters (Left Sidebar, 25% width):**
- Service Type (checkboxes)
- Location (text input + radius slider)
- Price Range (min-max inputs)
- Rating (star selector, 4+ stars, 3+ stars, etc.)
- Availability (toggle: Available now)
- "Apply Filters" button
- "Clear All" link

**Results (Right Content, 75% width):**
- Results count: "42 providers found"
- Sort dropdown: Relevance, Rating, Price (Low-High), Price (High-Low)
- Provider cards (grid view):
  - Profile photo (square)
  - Name & business name
  - Service type badge
  - Rating stars + review count
  - Starting price (large text)
  - Location
  - "View Profile" button
- Pagination: Previous, 1, 2, 3, Next (bottom)

**Mobile Adaptation:**
- Filters in collapsible drawer (hamburger menu)
- Single column provider cards
- Sticky "Filters" button at bottom

#### UI-3.3: Provider Profile Page

**Purpose:** Detailed provider information for customer decision

**Layout:**
```
+------------------+
| Logo | Nav |User|
+------------------+
| Provider Header  |
| Photo | Info     |
+------------------+
| Services Offered |
| (table or cards) |
+------------------+
| About Me         |
| (description)    |
+------------------+
| Reviews          |
| (list with stars)|
+------------------+
| [Request Service]|
+------------------+
```

**Provider Header:**
- Profile photo (large, left side)
- Name & business name
- Rating stars (large) + total reviews
- Years of experience badge
- Location icon + city
- "Request Service" button (prominent)

**Services Offered:**
- Table with columns: Service, Description, Starting Price
- Each row shows one service
- "View Details" expandable sections

**About Me:**
- Text description (max 500 words)
- Styled with line breaks and paragraphs

**Reviews Section:**
- Average rating summary (visual bar chart for 5, 4, 3, 2, 1 stars)
- Sort: Most Recent, Highest Rating, Lowest Rating
- Individual reviews:
  - Reviewer name (first name + initial)
  - Star rating
  - Date
  - Comment text
  - "Helpful" button (future)
- Pagination if >10 reviews

**Call-to-Action:**
- Sticky "Request Service" button (mobile: bottom bar)

#### UI-3.4: Booking Request Form (Modal)

**Purpose:** Capture service request details

**Trigger:** Clicking "Request Service" from provider profile

**Form Fields:**
- Service Type (dropdown, pre-populated if clicked from specific service)
- Preferred Date (date picker, minimum: today)
- Preferred Time (time picker, 30-min
- Job Description (textarea, 500 char max, required)
- Your Contact Info (auto-filled from profile, editable)
- Special Instructions (textarea, optional)
- "Submit Request" button
- "Cancel" link

**Validation:**
- All required fields must be filled
- Date cannot be in past
- Inline error messages

**Success:**
- Show confirmation message
- Display estimated response time
- Redirect to user dashboard after 3 seconds

---

## 7. Non-Functional Requirements

### 7.1 Performance Requirements

**NFR-1: Response Time**

**Priority:** High

- **NFR-1.1:** Web pages shall load within 3 seconds under normal network conditions (broadband/4G)
- **NFR-1.2:** Search results shall display within 2 seconds for queries returning up to 100 results
- **NFR-1.3:** Form submissions shall provide confirmation within 1 second
- **NFR-1.4:** Database queries shall execute within 1 second for 95% of requests
- **NFR-1.5:** API endpoints shall respond within 500ms for simple operations (get user profile)

**Measurement:** Response times measured from server using application performance monitoring (APM) tool

**NFR-2: Throughput**

**Priority:** Medium

- **NFR-2.1:** System shall support 100 concurrent users without performance degradation
- **NFR-2.2:** System shall handle 1,000 search requests per hour
- **NFR-2.3:** System shall process 500 booking requests per hour
- **NFR-2.4:** System shall send 10,000 emails per day via notification service

**Measurement:** Load testing with tools like JMeter or Locust

**NFR-3: Resource Usage**

**Priority:** Medium

- **NFR-3.1:** System shall use no more than 80% CPU during peak hours
- **NFR-3.2:** Database shall not exceed 75% of allocated storage
- **NFR-3.3:** Web server memory usage shall not exceed 6GB per instance
- **NFR-3.4:** Individual uploaded files shall not exceed 5MB

**Measurement:** Server monitoring dashboards

### 7.2 Safety Requirements

**NFR-4: Data Backup**

**Priority:** High

- **NFR-4.1:** System shall perform automated daily full database backups
- **NFR-4.2:** System shall perform automated hourly incremental backups
- **NFR-4.3:** Backups shall be stored in geographically separate location from primary system
- **NFR-4.4:** System shall retain daily backups for 30 days
- **NFR-4.5:** System shall test backup restoration monthly

**NFR-5: Disaster Recovery**

**Priority:** High

- **NFR-5.1:** System shall be recoverable to last backup within 4 hours of catastrophic failure (Recovery Time Objective: 4 hours)
- **NFR-5.2:** System shall ensure maximum data loss of 1 hour (Recovery Point Objective: 1 hour)
- **NFR-5.3:** Disaster recovery plan shall be documented and tested quarterly

### 7.3 Security Requirements

**NFR-6: Authentication & Authorization**

**Priority:** High

- **NFR-6.1:** System shall use secure session management with HttpOnly and Secure cookie flags
- **NFR-6.2:** Sessions shall expire after 24 hours of inactivity
- **NFR-6.3:** System shall lock user accounts after 5 consecutive failed login attempts
- **NFR-6.4:** Account lockout shall last 30 minutes before automatic unlock
- **NFR-6.5:** System shall enforce role-based access control (RBAC) for all protected resources
- **NFR-6.6:** Admin functions shall require re-authentication every 2 hours

**NFR-7: Data Protection**

**Priority:** High

- **NFR-7.1:** System shall hash all passwords using bcrypt with cost factor 12 or Argon2
- **NFR-7.2:** System shall never store passwords in plaintext or reversible encryption
- **NFR-7.3:** System shall use HTTPS/TLS 1.2+ for all client-server communications
- **NFR-7.4:** System shall encrypt sensitive data at rest (passwords, tokens)
- **NFR-7.5:** Database connections shall use encrypted channels (SSL/TLS)
- **NFR-7.6:** System shall mask sensitive data in logs (no passwords, tokens, or full credit card numbers)

**NFR-8: Input Validation & Injection Prevention**

**Priority:** High

- **NFR-8.1:** System shall validate and sanitize all user inputs on server-side
- **NFR-8.2:** System shall use parameterized SQL queries to prevent SQL injection
- **NFR-8.3:** System shall escape HTML output to prevent Cross-Site Scripting (XSS)
- **NFR-8.4:** System shall validate file uploads (type, size, content)
- **NFR-8.5:** System shall implement CSRF tokens for state-changing operations
- **NFR-8.6:** System shall rate limit API requests (100 requests/minute per user)
- **NFR-8.7:** System shall implement rate limiting on login attempts (5 attempts per 15 minutes per IP)

**NFR-9: Privacy & Compliance**

**Priority:** High

- **NFR-9.1:** System shall obtain explicit user consent before collecting personal data
- **NFR-9.2:** System shall provide users ability to export their personal data (JSON format)
- **NFR-9.3:** System shall provide users ability to delete their accounts and data
- **NFR-9.4:** System shall anonymize deleted user data within 30 days
- **NFR-9.5:** System shall display privacy policy and terms of service before registration
- **NFR-9.6:** System shall log all access to sensitive personal data for audit purposes

### 7.4 Software Quality Attributes

**NFR-10: Usability**

**Priority:** High

- **NFR-10.1:** System shall be usable by users with basic computer skills (no training required)
- **NFR-10.2:** System shall provide clear, actionable error messages for all user errors
- **NFR-10.3:** System shall follow consistent UI patterns across all pages
- **NFR-10.4:** System shall be accessible according to WCAG 2.1 Level AA standards
- **NFR-10.5:** System shall provide inline form validation with real-time feedback
- **NFR-10.6:** System shall support keyboard navigation for all interactive elements
- **NFR-10.7:** New users shall complete first booking request in under 10 minutes (measured via user testing)

**Measurement:** User testing, accessibility audits (WAVE, aXe)

**NFR-11: Reliability**

**Priority:** High

- **NFR-11.1:** System shall have 99% uptime during business hours (8am-8pm local time)
- **NFR-11.2:** System shall have 95% uptime overall (excluding planned maintenance)
- **NFR-11.3:** System shall handle errors gracefully without crashing
- **NFR-11.4:** System shall log all errors with stack traces for debugging
- **NFR-11.5:** System shall display user-friendly error pages (404, 500) instead of default server errors
- **NFR-11.6:** System shall automatically retry failed email notifications (max 3 attempts)

**Measurement:** Uptime monitoring (Pingdom, UptimeRobot), error tracking (Sentry)

**NFR-12: Maintainability**

**Priority:** Medium

- **NFR-12.1:** Code shall follow established coding standards (language-specific style guides)
- **NFR-12.2:** System shall use modular architecture with clear separation of concerns
- **NFR-12.3:** Complex logic shall include inline comments explaining intent
- **NFR-12.4:** All functions shall have descriptive names indicating purpose
- **NFR-12.5:** System shall include API documentation (Swagger/OpenAPI)
- **NFR-12.6:** Database schema shall be documented with entity descriptions
- **NFR-12.7:** System shall use version control with meaningful commit messages

**Measurement:** Code review checklists, documentation coverage

**NFR-13: Scalability**

**Priority:** Medium

- **NFR-13.1:** System architecture shall support horizontal scaling (add more servers)
- **NFR-13.2:** Database design shall accommodate growth to 100,000 users without schema changes
- **NFR-13.3:** System shall support addition of new service categories without code changes
- **NFR-13.4:** Caching layer shall reduce database queries by 50% for frequently accessed data
- **NFR-13.5:** File storage shall support migration to cloud storage (S3) without code rewrite

**Measurement:** Load testing, performance benchmarks

**NFR-14: Portability**

**Priority:** Low

- **NFR-14.1:** System shall be deployable on major cloud platforms (AWS, Azure, GCP)
- **NFR-14.2:** System shall use standard web technologies (no proprietary frameworks)
- **NFR-14.3:** Database schema shall use ANSI SQL standards (avoid vendor-specific features when possible)
- **NFR-14.4:** System shall use containerization (Docker) for consistent deployment

**Measurement:** Successful deployment on at least 2 different hosting platforms

---

## 8. System Features (Detailed)

This section provides detailed specifications for all system features with functional requirements, inputs, outputs, and acceptance criteria.

### 8.1 User Registration and Authentication

**Feature Priority:** High  
**Feature Owner:** Backend Team  
**Dependencies:** Email service, database

**Description:**  
Enables new users to create accounts, existing users to log in securely, and all users to manage their authentication credentials. Supports three user roles: Customer, Provider, and Admin.

#### FR-1.1: User Registration

**Priority:** High

**Functional Requirement:**  
System shall allow new users to register with name, email, and password.

**Inputs:**
- Full name (string, 2-100 characters)
- Email address (string, valid email format)
- Password (string, 8-50 characters)
- Role selection (Customer or Provider)
- Terms of Service acceptance (boolean, required)

**Processing:**
1. Validate all input fields server-side
2. Check email uniqueness in database
3. Validate password strength:
   - Minimum 8 characters
   - At least one uppercase letter
   - At least one lowercase letter
   - At least one number
   - Optional: special character
4. Hash password using bcrypt (cost factor 12)
5. Generate email verification token
6. Create user record in database
7. Send verification email

**Outputs:**
- Success: Confirmation message, redirect to email verification page
- Failure: Inline error messages indicating issues

**Business Rules:**
- Email addresses must be unique across all users
- Default role is "customer" unless provider registration flow
- Account inactive until email verified
- Verification token expires after 24 hours

**Acceptance Criteria:**

**AC-1.1.1:** User can successfully register with valid credentials
- Given: User provides valid name, email, password
- When: User submits registration form
- Then: Account created, verification email sent, confirmation page shown

**AC-1.1.2:** System prevents duplicate email registration
- Given: Email already exists in system
- When: User tries to register with same email
- Then: Error message "Email already registered" shown

**AC-1.1.3:** System enforces password requirements
- Given: User provides weak password (e.g., "pass123")
- When: User submits form
- Then: Error message "Password must include uppercase, lowercase, and number" shown

**AC-1.1.4:** System requires terms acceptance
- Given: User does not check terms acceptance checkbox
- When: User submits form
- Then: Error message "You must accept the Terms of Service" shown

#### FR-1.2: User Login

**Priority:** High

**Functional Requirement:**  
System shall authenticate users with email and password, creating secure session upon success.

**Inputs:**
- Email address (string)
- Password (string)
- "Remember Me" option (boolean, optional)

**Processing:**
1. Validate input presence
2. Retrieve user record by email
3. Verify account is active
4. Compare hashed password
5. Check account lockout status
6. If valid:
   - Create session record
   - Generate session token
   - Set secure cookie
   - Log login event
7. If invalid:
   - Increment failed login counter
   - Lock account after 5 failures
   - Log failed attempt with IP

**Outputs:**
- Success: Redirect to user dashboard
- Failure: Error message "Invalid email or password"
- Locked: Error message "Account locked. Try again in 30 minutes."

**Business Rules:**
- Session expires after 24 hours of inactivity (or 1 hour if "Remember Me" not checked)
- Failed login counter resets after successful login
- Account lockout lasts 30 minutes
- Admin accounts require 2FA (future enhancement)

**Acceptance Criteria:**

**AC-1.2.1:** User can log in with valid credentials
- Given: User has registered account with verified email
- When: User enters correct email and password
- Then: User redirected to appropriate dashboard based on role

**AC-1.2.2:** System rejects invalid credentials
- Given: User enters incorrect password
- When: User clicks login
- Then: Error message shown, failed attempt logged

**AC-1.2.3:** System locks account after 5 failures
- Given: User has failed login 4 times
- When: User fails 5th attempt
- Then: Account locked for 30 minutes, email notification sent

**AC-1.2.4:** System maintains session across pages
- Given: User is logged in
- When: User navigates to different pages
- Then: User remains authenticated without re-login

#### FR-1.3: Password Reset

**Priority:** High

**Functional Requirement:**  
System shall allow users to reset forgotten passwords via email verification.

**Inputs:**
- Email address (password reset request)
- New password (on reset form)
- Reset token (from email link)

**Processing:**
1. **Request Phase:**
   - Validate email exists in system
   - Generate unique reset token (UUID)
   - Store token with expiration (24 hours)
   - Send reset email with link
   - Show success message regardless of email existence (security)

2. **Reset Phase:**
   - Validate token is valid and not expired
   - Display password reset form
   - Validate new password strength
   - Hash new password
   - Update user record
   - Invalidate token
   - Send confirmation email

**Outputs:**
- Request: "If email exists, reset link sent"
- Reset Success: "Password updated successfully. Please log in."
- Reset Failure: "Reset link invalid or expired"

**Business Rules:**
- Reset token single-use only
- Token expires after 24 hours
- User must be logged out after password change
- Cannot reuse last 3 passwords (future enhancement)

**Acceptance Criteria:**

**AC-1.3.1:** User receives reset email
- Given: User clicks "Forgot Password" and enters registered email
- When: User submits form
- Then: Reset email sent within 2 minutes

**AC-1.3.2:** Reset link works correctly
- Given: User receives reset email
- When: User clicks link within 24 hours
- Then: Password reset form displayed

**AC-1.3.3:** Expired token rejected
- Given: Reset email sent more than 24 hours ago
- When: User clicks link
- Then: Error message "Reset link expired. Request new one."

**AC-1.3.4:** Password successfully reset
- Given: User enters valid new password on reset form
- When: User submits form
- Then: Password updated, confirmation email sent, redirect to login

#### FR-1.4: Role-Based Access Control

**Priority:** High

**Functional Requirement:**  
System shall enforce role-based permissions, restricting access to features based on user role.

**Roles:**

| Role | Permissions |
|------|-------------|
| **Customer** | Search, view profiles, send requests, leave reviews, manage own profile |
| **Provider** | All customer permissions PLUS manage provider profile, respond to requests, view analytics |
| **Admin** | All permissions PLUS approve providers, moderate content, manage users, view system reports |

**Processing:**
1. Check user role from session
2. Compare role with required permission for requested resource
3. Allow or deny access
4. Log unauthorized access attempts

**Business Rules:**
- Role assigned during registration (customer/provider)
- Admin role assigned manually by existing admin
- Role cannot be changed by user
- Unauthenticated users have read-only access (browse, search)

**Acceptance Criteria:**

**AC-1.4.1:** Customer cannot access provider dashboard
- Given: User logged in as customer
- When: User tries to access /provider/dashboard URL
- Then: 403 Forbidden error shown

**AC-1.4.2:** Provider cannot access admin panel
- Given: User logged in as provider
- When: User tries to access /admin URL
- Then: 403 Forbidden error shown

**AC-1.4.3:** Unauthenticated user can browse but not book
- Given: User not logged in
- When: User tries to send booking request
- Then: Login prompt displayed

**AC-1.4.4:** Each role sees appropriate navigation menu
- Given: User logged in
- When: User views header navigation
- Then: Only permitted links displayed based on role

---

### 8.2 Service Discovery and Search

**Feature Priority:** High  
**Feature Owner:** Backend + Frontend Team  
**Dependencies:** Database, search algorithm

**Description:**  
Enables customers to find service providers through keyword search, filtering, and sorting. Core feature for platform usability and provider discoverability.

*(Continue with detailed specifications for each feature area...)*

---

## 9. Quality Attributes

### 9.1 Testability

- System components shall be unit-testable with 80% code coverage
- Integration tests shall cover all API endpoints
- End-to-end tests shall cover critical user paths
- Test data shall be easily generated via seed scripts

### 9.2 Auditability

- All administrative actions logged in AUDIT_LOGS table
- All request status changes logged in REQUEST_HISTORY
- Failed login attempts logged with IP and timestamp
- Database changes tracked with created_at and updated_at timestamps

### 9.3 Compatibility

- System shall work on Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- System shall gracefully degrade in older browsers (basic functionality)
- Mobile responsive design tested on iOS 14+ and Android 10+

---

## 10. Other Requirements

### 10.1 Legal Requirements

**L-1:** Terms of Service must be displayed and accepted before registration
**L-2:** Privacy Policy must explain data collection, usage, and storage
**L-3:** Cookie consent banner required for EU users (GDPR)
**L-4:** Age verification: Users must confirm they are 18+
**L-5:** Disclaimer: Platform is marketplace, not responsible for service quality

### 10.2 Internationalization

**Phase 1:** English only
**Phase 2:** Support for Spanish, French (future)

### 10.3 Branding Requirements

- Logo and brand colors provided by marketing team
- Consistent branding across all pages
- White-label capability (future consideration)

---

## 11. Appendices

### Appendix A: Glossary

| Term | Definition |
|------|------------|
| **Actor** | A user or external system that interacts with the system |
| **Booking** | A service request from customer to provider |
| **CRUD** | Create, Read, Update, Delete operations |
| **JWT** | JSON Web Token for stateless authentication |
| **Provider** | Service professional offering local services |
| **Request** | Booking inquiry sent from customer to provider |
| **Session** | Authenticated user's active connection to system |

### Appendix B: Acronyms

| Acronym | Full Form |
|---------|-----------|
| SRS | Software Requirements Specification |
| API | Application Programming Interface |
| HTTPS | Hypertext Transfer Protocol Secure |
| SQL | Structured Query Language |
| SMTP | Simple Mail Transfer Protocol |
| UI | User Interface |
| UX | User Experience |
| RBAC | Role-Based Access Control |
| XSS | Cross-Site Scripting |
| CSRF | Cross-Site Request Forgery |

### Appendix C: Future Enhancements (Phase 2+)

1. **Payment Integration:** Escrow, invoicing, commission model
2. **Real-time Chat:** In-app messaging between users and providers
3. **Mobile Apps:** Native iOS and Android applications
4. **AI Recommendations:** Personalized provider suggestions
5. **Video Consultations:** Remote service estimates
6. **Calendar Integration:** Sync with Google Calendar, Outlook
7. **Background Checks:** Automated verification of provider credentials

---

**END OF DOCUMENT**

---

## Document Sign-Off

I have reviewed this Software Requirements Specification and agree that it accurately represents the requirements for the Local Service Provider System.

| Stakeholder | Signature | Date |
|-------------|-----------|------|
| Product Owner | _________________ | ________ |
| Technical Lead | _________________ | ________ |
| QA Lead | _________________ | ________ |
| Project Manager | _________________ | ________ |
| Business Representative | _________________ | ________ |

**Document Version:** 1.0  
**Last Updated:** 29 January 2026  
**Next Review Date:** 29 February 2026

---

graph TB
    subgraph External["External Entities"]
        Customer["👤 Customer<br/>(Service Seeker)"]
        Provider["👷 Service Provider<br/>(Plumber, Electrician, etc.)"]
        Admin["👨‍💼 System Admin"]
        EmailService["📧 Email Service<br/>(SMTP)"]
        Browser["🌐 Web Browser"]
    end
    
    subgraph System["Local Service Provider System"]
        Core["Core Application"]
    end
    
    Customer -->|Registration Data| Core
    Customer -->|Search Queries| Core
    Customer -->|Booking Requests| Core
    Customer -->|Reviews & Ratings| Core
    
    Core -->|Search Results| Customer
    Core -->|Request Status| Customer
    Core -->|Email Notifications| Customer
    
    Provider -->|Profile Data| Core
    Provider -->|Service Offerings| Core
    Provider -->|Request Responses| Core
    
    Core -->|Incoming Requests| Provider
    Core -->|Job Details| Provider
    Core -->|Email Notifications| Provider
    
    Admin -->|Moderation Actions| Core
    Admin -->|Configuration| Core
    
    Core -->|User Management Data| Admin
    Core -->|System Reports| Admin
    Core -->|Flagged Content| Admin
    
    Core -->|Email Requests| EmailService
    EmailService -->|Delivery Status| Core
    
    Browser -->|HTTP/HTTPS| Core
    Core -->|Web Pages| Browser
    
    style System fill:#e1f5ff,stroke:#0066cc,stroke-width:3px
    style External fill:#fff4e6,stroke:#ff9800,stroke-width:2px
    style Core fill:#4CAF50,stroke:#2E7D32,stroke-width:2px,color:#fff


---

graph TB
    subgraph CustomerUseCases["Customer Use Cases"]
        C1((Register/Login))
        C2((Search Services))
        C3((Filter Results))
        C4((View Provider Profile))
        C5((Send Booking Request))
        C6((Track Request Status))
        C7((Cancel Request))
        C8((Leave Review))
        C9((Manage Profile))
        
        Customer1[👤 Customer] --> C1
        Customer1 --> C2
        Customer1 --> C3
        Customer1 --> C4
        Customer1 --> C5
        Customer1 --> C6
        Customer1 --> C7
        Customer1 --> C8
        Customer1 --> C9
    end
    
    subgraph ProviderUseCases["Service Provider Use Cases"]
        P1((Register as Provider))
        P2((Login))
        P3((Create/Update Profile))
        P4((Add Services))
        P5((Manage Pricing))
        P6((View Requests))
        P7((Accept Request))
        P8((Decline Request))
        P9((Mark Job Complete))
        P10((View Reviews))
        P11((Update Availability))
        
        Provider1[👷 Service Provider] --> P1
        Provider1 --> P2
        Provider1 --> P3
        Provider1 --> P4
        Provider1 --> P5
        Provider1 --> P6
        Provider1 --> P7
        Provider1 --> P8
        Provider1 --> P9
        Provider1 --> P10
        Provider1 --> P11
    end
    
    subgraph AdminUseCases["Admin Use Cases"]
        A1((Login to Admin))
        A2((Approve Providers))
        A3((Reject Providers))
        A4((Manage Users))
        A5((Moderate Reviews))
        A6((View Reports))
        A7((Deactivate Accounts))
        A8((View Audit Logs))
        A9((Manage Services))
        
        Admin1[👨‍💼 System Admin] --> A1
        Admin1 --> A2
        Admin1 --> A3
        Admin1 --> A4
        Admin1 --> A5
        Admin1 --> A6
        Admin1 --> A7
        Admin1 --> A8
        Admin1 --> A9
    end
    
    subgraph SharedUseCases["System-Wide Use Cases"]
        S1((Send Email Notification))
        S2((Validate Input))
        S3((Log Activity))
        
        C5 -.includes.-> S1
        P7 -.includes.-> S1
        C1 -.includes.-> S2
        P1 -.includes.-> S2
        A2 -.includes.-> S3
    end
    
    style CustomerUseCases fill:#e3f2fd,stroke:#1976d2
    style ProviderUseCases fill:#fff3e0,stroke:#f57c00
    style AdminUseCases fill:#fce4ec,stroke:#c2185b
    style SharedUseCases fill:#f1f8e9,stroke:#558b2f


---

graph LR
    Customer["👤<br/>Customer"]
    Provider["👷<br/>Service Provider"]
    Admin["👨‍💼<br/>Admin"]
    
    System[("Local Service<br/>Provider System<br/>(Process 0)")]
    
    Customer -->|Registration Data| System
    Customer -->|Search Query| System
    Customer -->|Booking Request| System
    Customer -->|Review & Rating| System
    
    System -->|Search Results| Customer
    System -->|Request Status| Customer
    System -->|Notifications| Customer
    
    Provider -->|Profile Data| System
    Provider -->|Service Info| System
    Provider -->|Request Response| System
    Provider -->|Job Status| System
    
    System -->|Requests| Provider
    System -->|Notifications| Provider
    System -->|Review Data| Provider
    
    Admin -->|Approval/Rejection| System
    Admin -->|Moderation Actions| System
    
    System -->|Reports & Analytics| Admin
    System -->|Pending Approvals| Admin
    System -->|Flagged Content| Admin
    
    style System fill:#4CAF50,stroke:#2E7D32,stroke-width:3px,color:#fff
    style Customer fill:#2196F3,stroke:#1565C0,stroke-width:2px,color:#fff
    style Provider fill:#FF9800,stroke:#E65100,stroke-width:2px,color:#fff
    style Admin fill:#E91E63,stroke:#880E4F,stroke-width:2px,color:#fff

---

graph TB
    Customer["👤 Customer"]
    Provider["👷 Provider"]
    Admin["👨‍💼 Admin"]
    
    subgraph Processes["System Processes"]
        P1["1.0<br/>User<br/>Management"]
        P2["2.0<br/>Service<br/>Discovery"]
        P3["3.0<br/>Booking<br/>Management"]
        P4["4.0<br/>Provider<br/>Management"]
        P5["5.0<br/>Review<br/>System"]
        P6["6.0<br/>Admin<br/>Control"]
        P7["7.0<br/>Notification<br/>Service"]
    end
    
    subgraph DataStores["Data Stores"]
        D1[("D1: Users")]
        D2[("D2: Providers")]
        D3[("D3: Services")]
        D4[("D4: Requests")]
        D5[("D5: Reviews")]
        D6[("D6: Notifications")]
    end
    
    Customer -->|Registration| P1
    Customer -->|Login| P1
    P1 -->|User Data| D1
    
    Customer -->|Search Query| P2
    P2 -->|Provider Info| D2
    P2 -->|Service Info| D3
    P2 -->|Results| Customer
    
    Customer -->|Booking Request| P3
    P3 -->|Request Data| D4
    P3 -->|Trigger| P7
    D4 -->|Request Status| P3
    P3 -->|Status Update| Customer
    
    Provider -->|Profile Update| P4
    P4 -->|Provider Data| D2
    P4 -->|Service Data| D3
    Provider -->|Request Response| P3
    P3 -->|Requests| Provider
    
    Customer -->|Review Data| P5
    P5 -->|Review| D5
    D5 -->|Review Stats| P4
    P5 -->|Reviews| Provider
    
    Admin -->|Actions| P6
    P6 -->|Read/Write| D1
    P6 -->|Read/Write| D2
    P6 -->|Read/Write| D5
    P6 -->|Reports| Admin
    
    P7 -->|Email| Customer
    P7 -->|Email| Provider
    P7 -->|Log| D6
    
    style Processes fill:#e3f2fd,stroke:#1976d2
    style DataStores fill:#fff3e0,stroke:#f57c00

---

sequenceDiagram
    actor Customer
    participant UI as Web Interface
    participant Auth as Auth Service
    participant Booking as Booking Service
    participant DB as Database
    participant Notify as Notification Service
    participant Email as Email Service
    actor Provider
    
    Customer->>UI: Search for service
    UI->>DB: Query providers
    DB-->>UI: Return results
    UI-->>Customer: Display providers
    
    Customer->>UI: View provider profile
    UI->>DB: Get provider details
    DB-->>UI: Provider data + reviews
    UI-->>Customer: Show profile page
    
    Customer->>UI: Click "Request Service"
    UI->>Auth: Verify session
    Auth-->>UI: Session valid
    
    UI-->>Customer: Show booking form
    Customer->>UI: Submit booking details
    
    UI->>Booking: Create request
    Booking->>DB: Insert request (status: pending)
    DB-->>Booking: Request created (ID: 123)
    
    Booking->>Notify: Trigger notification
    Notify->>Email: Send to provider
    Email-->>Provider: New request email
    
    Notify->>DB: Log notification
    Booking-->>UI: Success response
    UI-->>Customer: Confirmation message
    
    Note over Customer,Provider: Provider reviews request...
    
    Provider->>UI: Login to dashboard
    UI->>DB: Get pending requests
    DB-->>UI: Request list
    UI-->>Provider: Show requests
    
    Provider->>UI: Accept request
    UI->>Booking: Update request
    Booking->>DB: Update status = "accepted"
    
    Booking->>Notify: Trigger notification
    Notify->>Email: Send to customer
    Email-->>Customer: Request accepted email
    
    Booking-->>UI: Success
    UI-->>Provider: Confirmation
    
    Note over Provider: Job completed...
    
    Provider->>UI: Mark complete
    UI->>Booking: Update status
    Booking->>DB: Update status = "completed"
    
    Booking->>Notify: Trigger notification
    Notify->>Email: Request review email
    Email-->>Customer: Review reminder
    
    UI-->>Provider: Job marked complete

---
stateDiagram-v2
    [*] --> Pending: Customer submits request
    
    Pending --> Accepted: Provider accepts
    Pending --> Declined: Provider declines
    Pending --> Cancelled: Customer cancels
    
    Accepted --> InProgress: Work started
    Accepted --> Cancelled: Customer cancels
    
    InProgress --> Completed: Provider marks complete
    InProgress --> Cancelled: Mutual cancellation
    
    Declined --> [*]: End
    Cancelled --> [*]: End
    Completed --> Reviewed: Customer leaves review
    Completed --> [*]: No review submitted
    Reviewed --> [*]: End
    
    note right of Pending
        Initial state when
        customer sends request
    end note
    
    note right of Accepted
        Provider has agreed
        to provide service
    end note
    
    note right of InProgress
        Job in execution
        (Optional state)
    end note
    
    note right of Completed
        Service delivered
        Ready for review
    end note
    
    note right of Declined
        Provider cannot
        fulfill request
    end note
    
    note right of Cancelled
        Request terminated
        before completion
    end note

---
stateDiagram-v2
    [*] --> Draft: Provider starts registration
    
    Draft --> Submitted: Provider submits profile
    
    Submitted --> UnderReview: Admin starts review
    
    UnderReview --> Approved: Admin approves
    UnderReview --> Rejected: Admin rejects
    UnderReview --> OnHold: Additional info needed
    
    OnHold --> Submitted: Provider updates info
    OnHold --> Rejected: Provider abandons
    
    Approved --> Active: Profile visible to users
    
    Active --> Suspended: Policy violation
    Active --> Inactive: Provider deactivates
    
    Suspended --> Active: Issue resolved
    Suspended --> Rejected: Permanent ban
    
    Inactive --> Active: Provider reactivates
    
    Rejected --> [*]: End
    
    note right of Draft
        Profile incomplete
        Not visible to admin
    end note
    
    note right of Submitted
        Waiting for admin
        review in queue
    end note
    
    note right of UnderReview
        Admin is evaluating
        credentials & info
    end note
    
    note right of Approved
        Verified and ready
        to go live
    end note
    
    note right of Active
        Visible in searches
        Can receive requests
    end note
    
    note right of Suspended
        Temporarily hidden
        Under investigation
    end note

---
graph TD
    Start([User Opens Platform]) --> EnterSearch[Enter Search Query]
    
    EnterSearch --> ApplyFilters{Apply Filters?}
    
    ApplyFilters -->|Yes| SelectFilters[Select:<br/>- Service Type<br/>- Location<br/>- Price Range<br/>- Rating]
    ApplyFilters -->|No| ExecuteSearch
    
    SelectFilters --> ExecuteSearch[Execute Search Query]
    
    ExecuteSearch --> CheckResults{Results<br/>Found?}
    
    CheckResults -->|No| ShowNoResults[Display:<br/>'No providers found']
    ShowNoResults --> SuggestBroader[Suggest:<br/>Broaden search criteria]
    SuggestBroader --> ModifySearch{Modify<br/>Search?}
    
    ModifySearch -->|Yes| EnterSearch
    ModifySearch -->|No| End1([Exit])
    
    CheckResults -->|Yes| DisplayResults[Display Provider Cards:<br/>- Photo<br/>- Name<br/>- Rating<br/>- Starting Price<br/>- Location]
    
    DisplayResults --> SortResults{Apply<br/>Sorting?}
    
    SortResults -->|Yes| SelectSort[Sort by:<br/>- Relevance<br/>- Rating<br/>- Price<br/>- Distance]
    SelectSort --> DisplayResults
    
    SortResults -->|No| UserAction{User<br/>Action?}
    
    UserAction -->|View Profile| ViewProfile[Open Provider<br/>Profile Page]
    UserAction -->|Refine Search| ApplyFilters
    UserAction -->|Exit| End2([Exit])
    
    ViewProfile --> ProfileDecision{Interested?}
    
    ProfileDecision -->|No| BackToResults[Back to Results]
    BackToResults --> DisplayResults
    
    ProfileDecision -->|Yes| CheckAuth{Logged In?}
    
    CheckAuth -->|No| ShowLogin[Show Login Prompt]
    ShowLogin --> LoginSuccess{Login<br/>Success?}
    LoginSuccess -->|No| BackToProfile[Return to Profile]
    BackToProfile --> ViewProfile
    LoginSuccess -->|Yes| SendRequest
    
    CheckAuth -->|Yes| SendRequest[Send Booking Request]
    
    SendRequest --> End3([End - Request Sent])
    
    style Start fill:#4CAF50,color:#fff
    style End1 fill:#f44336,color:#fff
    style End2 fill:#f44336,color:#fff
    style End3 fill:#4CAF50,color:#fff
    style ExecuteSearch fill:#2196F3,color:#fff
    style SendRequest fill:#FF9800,color:#fff

---
graph TB
    subgraph Client["Presentation Layer (Client Side)"]
        Browser["Web Browser"]
        UI["User Interface<br/>(HTML/CSS/JavaScript)"]
        
        Browser --> UI
    end
    
    subgraph Application["Application Layer (Server Side)"]
        WebServer["Web Server<br/>(Apache/Nginx)"]
        
        subgraph AppServices["Application Services"]
            AuthService["Authentication<br/>Service"]
            UserService["User<br/>Management"]
            SearchService["Search &<br/>Discovery"]
            BookingService["Booking<br/>Management"]
            ProviderService["Provider<br/>Management"]
            ReviewService["Review<br/>System"]
            AdminService["Admin<br/>Control"]
            NotifyService["Notification<br/>Service"]
        end
        
        WebServer --> AuthService
        WebServer --> UserService
        WebServer --> SearchService
        WebServer --> BookingService
        WebServer --> ProviderService
        WebServer --> ReviewService
        WebServer --> AdminService
        WebServer --> NotifyService
    end
    
    subgraph DataLayer["Data Layer"]
        subgraph Database["Database Server (MySQL/PostgreSQL)"]
            UserDB[("Users<br/>Table")]
            ProviderDB[("Providers<br/>Table")]
            ServiceDB[("Services<br/>Table")]
            RequestDB[("Requests<br/>Table")]
            ReviewDB[("Reviews<br/>Table")]
        end
        
        FileStorage["File Storage<br/>(Images/Documents)"]
        Cache["Cache Layer<br/>(Redis - Optional)"]
    end
    
    subgraph External["External Services"]
        EmailSMTP["Email Service<br/>(SMTP/SendGrid)"]
        SMSGateway["SMS Gateway<br/>(Future)"]
        PaymentGW["Payment Gateway<br/>(Future)"]
    end
    
    UI -->|HTTPS/REST API| WebServer
    
    AuthService --> UserDB
    AuthService --> Cache
    
    UserService --> UserDB
    ProviderService --> ProviderDB
    ProviderService --> ServiceDB
    ProviderService --> FileStorage
    
    SearchService --> ProviderDB
    SearchService --> ServiceDB
    SearchService --> ReviewDB
    SearchService --> Cache
    
    BookingService --> RequestDB
    BookingService --> NotifyService
    
    ReviewService --> ReviewDB
    ReviewService --> UserDB
    ReviewService --> ProviderDB
    
    AdminService --> UserDB
    AdminService --> ProviderDB
    AdminService --> ReviewDB
    
    NotifyService --> EmailSMTP
    NotifyService -.Future.-> SMSGateway
    
    BookingService -.Future.-> PaymentGW
    
    style Client fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    style Application fill:#fff3e0,stroke:#f57c00,stroke-width:2px
    style DataLayer fill:#f1f8e9,stroke:#558b2f,stroke-width:2px
    style External fill:#fce4ec,stroke:#c2185b,stroke-width:2px
    style AppServices fill:#fff9c4,stroke:#f9a825
---
graph TB
    subgraph UserDevices["User Devices"]
        Desktop["💻 Desktop<br/>Browser"]
        Mobile["📱 Mobile<br/>Browser"]
        Tablet["📱 Tablet<br/>Browser"]
    end
    
    subgraph Internet["Internet / CDN"]
        LoadBalancer["⚖️ Load Balancer<br/>(Nginx/HAProxy)"]
        CDN["🌐 CDN<br/>(Static Assets)"]
    end
    
    subgraph WebTier["Web Server Tier"]
        WebServer1["🖥️ Web Server 1<br/>(Node.js/Apache)"]
        WebServer2["🖥️ Web Server 2<br/>(Node.js/Apache)"]
    end
    
    subgraph AppTier["Application Tier"]
        AppServer1["⚙️ App Server 1<br/>(API Services)"]
        AppServer2["⚙️ App Server 2<br/>(API Services)"]
        
        subgraph Services["Microservices"]
            Auth["🔐 Auth"]
            Booking["📋 Booking"]
            Search["🔍 Search"]
            Notify["📧 Notify"]
        end
    end
    
    subgraph DataTier["Data Tier"]
        PrimaryDB["🗄️ Primary Database<br/>(MySQL/PostgreSQL)<br/>Master"]
        ReplicaDB["🗄️ Replica Database<br/>(Read Replicas)"]
        Redis["⚡ Redis Cache<br/>(Session/Query Cache)"]
        FileServer["📁 File Server<br/>(S3/Local Storage)"]
    end
    
    subgraph ExternalServices["External Services"]
        EmailProvider["📧 Email Service<br/>(SendGrid/AWS SES)"]
        Monitoring["📊 Monitoring<br/>(New Relic/DataDog)"]
        Backup["💾 Backup Service<br/>(Automated Backups)"]
    end
    
    Desktop -->|HTTPS| LoadBalancer
    Mobile -->|HTTPS| LoadBalancer
    Tablet -->|HTTPS| LoadBalancer
    
    Desktop -.->|Static Assets| CDN
    Mobile -.->|Static Assets| CDN
    Tablet -.->|Static Assets| CDN
    
    LoadBalancer --> WebServer1
    LoadBalancer --> WebServer2
    
    WebServer1 --> AppServer1
    WebServer1 --> AppServer2
    WebServer2 --> AppServer1
    WebServer2 --> AppServer2
    
    AppServer1 --> Auth
    AppServer1 --> Booking
    AppServer1 --> Search
    AppServer1 --> Notify
    
    AppServer2 --> Auth
    AppServer2 --> Booking
    AppServer2 --> Search
    AppServer2 --> Notify
    
    Auth --> Redis
    Auth --> PrimaryDB
    
    Booking --> PrimaryDB
    Search --> ReplicaDB
    Search --> Redis
    
    AppServer1 --> FileServer
    AppServer2 --> FileServer
    
    PrimaryDB -.Replication.-> ReplicaDB
    
    Notify --> EmailProvider
    
    AppServer1 -.Metrics.-> Monitoring
    AppServer2 -.Metrics.-> Monitoring
    WebServer1 -.Metrics.-> Monitoring
    WebServer2 -.Metrics.-> Monitoring
    
    PrimaryDB -.Backup.-> Backup
    
    style UserDevices fill:#e3f2fd,stroke:#1976d2
    style Internet fill:#f3e5f5,stroke:#7b1fa2
    style WebTier fill:#fff3e0,stroke:#f57c00
    style AppTier fill:#e8f5e9,stroke:#388e3c
    style DataTier fill:#fff9c4,stroke:#f9a825
    style ExternalServices fill:#fce4ec,stroke:#c2185b

---
erDiagram
    USERS ||--o{ SESSIONS : "has"
    USERS ||--o| PROVIDERS : "may become"
    USERS ||--o{ REQUESTS : "creates"
    USERS ||--o{ REVIEWS : "writes"
    USERS ||--o{ NOTIFICATIONS : "receives"
    
    PROVIDERS ||--o{ PROVIDER_SERVICES : "offers"
    PROVIDERS ||--o{ REQUESTS : "receives"
    PROVIDERS ||--o{ REVIEWS : "receives"
    PROVIDERS ||--o{ AVAILABILITY : "sets"
    
    SERVICES ||--o{ PROVIDER_SERVICES : "listed in"
    SERVICES ||--o{ REQUESTS : "requested"
    
    REQUESTS ||--o| REVIEWS : "may have"
    REQUESTS ||--o{ REQUEST_HISTORY : "tracks"
    
    ADMIN_USERS ||--o{ AUDIT_LOGS : "creates"
    
    USERS {
        int id PK
        string name
        string email UK
        string password_hash
        string phone
        enum role
        boolean is_active
        boolean email_verified
        timestamp created_at
        timestamp updated_at
    }
    
    SESSIONS {
        int id PK
        int user_id FK
        string session_token UK
        string ip_address
        timestamp expires_at
        timestamp created_at
    }
    
    PROVIDERS {
        int id PK
        int user_id FK,UK
        string business_name
        text about
        string address
        int years_experience
        string profile_photo
        enum approval_status
        boolean is_visible
        decimal avg_rating
        int total_reviews
        timestamp created_at
        timestamp updated_at
    }
    
    SERVICES {
        int id PK
        string name UK
        text description
        string category
        string icon
        boolean is_active
        timestamp created_at
    }
    
    PROVIDER_SERVICES {
        int id PK
        int provider_id FK
        int service_id FK
        decimal base_price
        string price_unit
        text description
        boolean is_available
        timestamp created_at
        timestamp updated_at
    }
    
    REQUESTS {
        int id PK
        int user_id FK
        int provider_id FK
        int service_id FK
        text description
        date preferred_date
        time preferred_time
        enum status
        text decline_reason
        decimal estimated_cost
        timestamp request_time
        timestamp accepted_at
        timestamp completed_at
        timestamp updated_at
    }
    
    REQUEST_HISTORY {
        int id PK
        int request_id FK
        enum old_status
        enum new_status
        text notes
        int changed_by FK
        timestamp changed_at
    }
    
    REVIEWS {
        int id PK
        int user_id FK
        int provider_id FK
        int request_id FK,UK
        int rating
        text comment
        boolean is_visible
        boolean is_flagged
        string flag_reason
        timestamp created_at
        timestamp reviewed_at
    }
    
    NOTIFICATIONS {
        int id PK
        int user_id FK
        string type
        string title
        text message
        boolean is_read
        string related_entity
        int related_id
        timestamp created_at
        timestamp read_at
    }
    
    AVAILABILITY {
        int id PK
        int provider_id FK
        enum day_of_week
        time start_time
        time end_time
        boolean is_available
    }
    
    ADMIN_USERS {
        int id PK
        int user_id FK,UK
        enum permission_level
        timestamp created_at
    }
    
    AUDIT_LOGS {
        int id PK
        int admin_id FK
        string action_type
        string entity_type
        int entity_id
        text old_value
        text new_value
        string ip_address
        timestamp created_at
    }

---
