import React from 'react';

const SignInForm = () => {
  return (
    <div className="w-full max-w-[400px] px-4 sm:px-0">
      <div className="mb-6 md:mb-9">
        {/* Mobile-only Logo - smaller on mobile */}
        <div className="lg:hidden mb-4">
          <span className="material-symbols-outlined text-3xl text-[#0A192F]">hub</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-1 font-spaceGrotesk">Sign in</h1>
        <p className="text-sm md:text-base text-[#6B7280]">Welcome back. Please enter your credentials.</p>
      </div>

      <form className="space-y-3 md:space-y-" onSubmit={(e) => e.preventDefault()}>

<div className="relative group">
    <label
    htmlFor="email"
    className='text-xs font-poppins font-semibold'
  >
    Email Address
  </label>
  <input
    id="email"
    type="email"
    placeholder=" "
    className="peer w-full border border-[#E5E7EB] rounded h-10 md:h-10 px-3 md:px-4 text-sm text-gray-900 
               placeholder-transparent focus:outline-none focus:ring-1 focus:ring-[#0A192F] focus:border-[#0A192F] transition-all"
  />

</div>
     <div className="relative group">
       <label
    htmlFor="email"
    className='text-xs font-poppins font-semibold'
 
  >
    password
  </label>
  <input
    id="email"
    type="password"
    placeholder=" "
    className="peer w-full border border-[#E5E7EB]  rounded h-10 md:h-10 p-5 md:px-4 text-sm text-gray-900 
               placeholder-transparent focus:outline-none focus:ring-1 focus:ring-[#0A192F] focus:border-[#0A192F] transition-all"
  />
 
</div>
        <div className="flex items-center space-x-2 pb-1">
          <input className="w-3.5 h-3.5 text-[#0A192F] border-gray-300 rounded focus:ring-[#0A192F]" id="remember" type="checkbox" />
          <label className="text-xs md:text-sm text-[#6B7280]" htmlFor="remember">Keep me logged in</label>
        </div>

        <button className="w-full bg-[#0A192F] text-white text-sm md:text-base font-medium h-10 md:h-12 rounded-md hover:bg-slate-800 transition-all shadow-sm">
          Sign In
        </button>
      </form>

      <div className="relative my-6 md:my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#E5E7EB]"></div>
        </div>
        <div className="relative flex justify-center text-[10px] md:text-xs">
          <span className="bg-white px-3 text-gray-400 font-medium tracking-wide uppercase">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <SocialButton provider="Google" />
        <SocialButton provider="LinkedIn" />
      </div>

      <p className="text-center text-[#6B7280] text-xs md:text-sm mt-8 md:mt-10">
        Don't have an account? <a className="text-[#0A192F] font-semibold hover:underline" href="#">Join now</a>
      </p>
    </div>
  );
};

const SocialButton = ({ provider }) => (
  <button className="flex items-center justify-center w-full h-10 md:h-12 border border-[#E5E7EB] rounded-md hover:bg-gray-50 transition-colors">
    <span className="text-xs md:text-sm font-medium text-gray-700">{provider}</span>
  </button>
);

export default SignInForm;