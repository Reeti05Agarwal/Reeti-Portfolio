export default function TryhackmeBadge() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white/5 backdrop-blur-md rounded-xl w-fit shadow-lg">
        <iframe
          src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4435983"
          style={{ border: "none", width: "330px", height: "88px" }}
          title="TryHackMe Badge"
        />
      </div>
    </div>
  );
}
