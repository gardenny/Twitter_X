export default function Profile() {
  return (
    <div className="flex-center my-6 w-full cursor-pointer rounded-full xl:justify-start">
      <img className="h-10 w-10 rounded-full" src="images/user.png" />

      <div className="mx-4 hidden flex-col xl:flex">
        <h4 className="text-sm font-bold text-gray-800 dark:text-white">
          <a href="https://github.com/Bashar-Omar" target="_blank">
            유저
          </a>
        </h4>

        <p className="text-sm text-gray-400">
          <a href="https://github.com/Bashar-Omar" target="_blank">
            로그인하지 않음
          </a>
        </p>
      </div>
    </div>
  );
}
