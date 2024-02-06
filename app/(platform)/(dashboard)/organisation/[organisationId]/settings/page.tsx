import { OrganizationProfile } from "@clerk/nextjs";

const SettingPage = () => {
  return (
    <div className="w-full">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
            },
            card: {
              border: "2px solid #000",
            },
          },
        }}
      />
    </div>
  );
};

export default SettingPage;
