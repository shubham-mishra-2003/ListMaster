import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganisationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organisation/:id"
      afterCreateOrganizationUrl="/organisation/:id"
    />
  );
}
