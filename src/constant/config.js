export const AuthTagLinesConfig = {
  title: "Streamline Your Health Insurance with AI",
  taglines: [
    "✔️Get Instant answers about your health plan",
    "✔️Easily manage your claims",
    "✔️Find in-network or out-network doctors quickly",
  ],
};

export const ToggleLoginSignUpConfig = [
  {
    mode: "Login",
    label: "Login",
  },
  {
    mode: "SignUp",
    label: "SignUp",
  },
];

export const FormConfig = [
  {
    flag: "SignUp",
    id: "fname",
    name: "fname",
    placeholder: "🔤Enter Your Full Name",
    label: "Full Name",
    type: "text",
    required: true,
  },
  {
    flag: "SignUp",
    id: "crn",
    name: "crn",
    placeholder: "🔢Enter Your CRN",
    label: "CRN",
    type: "number",
    required: true,
  },
  {
    flag: "Login-SignUp",
    id: "email",
    name: "email",
    placeholder: "✉️Enter Your email",
    label: "Email",
    type: "text",
    required: true,
  },
  {
    flag: "Login-SignUp",
    id: "pwd",
    name: "pwd",
    placeholder: "🔒********",
    label: "Password",
    type: "password",
    required: true,
  },
];

export const SidebarConfig = [
  {
    name: "Claims",
    link: "/claims",
  },
  {
    name: "Provider",
    link: "/provider",
  },
  {
    name: "Profile",
    link: "/profile",
  },
];

export const MobileNavConfig = [
  {
    iconName: "dashboard",
    label: "Dashboard",
    link: "/",
  },
  {
    iconName: "claims",
    label: "Claims",
    link: "/claims",
  },
  {
    iconName: "provider",
    label: "Provider",
    link: "/provider",
  },
  {
    iconName: "profile",
    label: "Profile",
    link: "/profile",
  },
];

export const ProfileConfig = {
  headerLabel: "Profile",
  userInfo: {
    name: "prashant",
    memberID: "51232",
    dob: "Jan 12 1997",
    coverageActive: true,
  },
};

export const CovergaePlanConfig = {
  headerLabel: "Plan Info",
  plan_Info: [
    {
      id: "121",
      planName: "Vivanta Medicare",
      description: [
        {
          planCategory: "Premium Plus",
          planNumber: "POL12312313",
          planMailId: "PPO@XYZ.COM",
        },
      ],
    },
  ],
};
export const DependentConfig = {
  headerLabel: "Dependents",
  dependents: [
    {
      id: "dep-001",
      dependentName: "Arjun Roy",
      dependentRelation: "Father",
      dependentDOB: "Jan 11 1963",
    },
  ],
};

export const DashboardDefaultMessageConfig = [
  {
    label: "🛄Show my denied Claims",
    defaultMessage: "Show my denied Claims",
  },
  {
    label: "🥼Cardiologist in Delhi",
    defaultMessage: "Cardiologist in Delhi",
  },
];

export const apiWarning = {
  title: "🏗️Demo Build — API key is client-side (intentional for portfolio)",
  descp: `This project is a frontend portfolio demonstration.  
  In production, API keys belong server-side (Next.js API route / FastAPI / Node Js). Intentional for portfolio demonstration.`,
};
