import { Sidebar } from "../_components/Sidebar";

const OrganisationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex pt-20 md:pt-24 md:px-6 px-1.5 2xl:max-w-screen-xl mx-auto">
      <div className="flex gap-x-7">
        <div className="hidden w-64 shrink-0 md:block">
          <Sidebar />
        </div>
      </div>
      {children}
    </main>
  );
};

export default OrganisationLayout;
