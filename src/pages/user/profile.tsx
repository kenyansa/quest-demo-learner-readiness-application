const Profile = () => {
  return (
    <div className="bg-slate-50 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 sm:p-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-darkBlue mb-6">
          Profile
        </h1>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition cursor-pointer">
            <span className="font-medium text-slate-900">Name</span>
            <span className="text-sm text-greyBlue mt-1 sm:mt-0">John Doe</span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition cursor-pointer">
            <span className="font-medium text-slate-900">Email</span>
            <span className="text-sm text-greyBlue mt-1 sm:mt-0">
              john.doe@example.com
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition cursor-pointer">
            <span className="font-medium text-slate-900">Member Since</span>
            <span className="text-sm text-greyBlue mt-1 sm:mt-0">Jan 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
