const NewsLetter = () => {

    return (
        <div className="flex flex-col items-center justify-center text-center space-y-2 mt-24 pb-14">
            <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
            <p className="md:text-lg text-gray-500/70 pb-8">
                Subscribe to get the latest offers, new arrivals, and exclusive discounts
            </p>
            <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
                <input
                    className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
                    type="text"
                    placeholder="Enter your email id"
                    required
                />
                <button type="submit" className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-md rounded-l-none">
                    Subscribe
                </button>
            </form>

            {/* Contact Us Section */}
            <div className="w-full max-w-2xl mt-10 border border-gray-200 rounded-2xl bg-white shadow-sm px-8 py-6 text-left">
                <h2 className="text-xl font-semibold text-gray-800 mb-5 text-center">Contact Us</h2>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

                    {/* Left: Contact Details */}
                    <div className="flex flex-col gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-3">
                            {/* Phone Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.75A2.75 2.75 0 015.75 3h.738a1 1 0 01.97.757l.8 3.2a1 1 0 01-.287.993l-1.2 1.08a13.02 13.02 0 006.2 6.2l1.08-1.2a1 1 0 01.993-.287l3.2.8a1 1 0 01.757.97v.738A2.75 2.75 0 0118.25 21C9.828 21 3 14.172 3 5.75z" />
                            </svg>
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Phone Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.75A2.75 2.75 0 015.75 3h.738a1 1 0 01.97.757l.8 3.2a1 1 0 01-.287.993l-1.2 1.08a13.02 13.02 0 006.2 6.2l1.08-1.2a1 1 0 01.993-.287l3.2.8a1 1 0 01.757.97v.738A2.75 2.75 0 0118.25 21C9.828 21 3 14.172 3 5.75z" />
                            </svg>
                            <span>+91 91234 56789</span>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Mail Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>support@greencart.com</span>
                        </div>
                    </div>

                    {/* Right: Social Media Icons */}
                    <div className="flex items-center gap-4">
                        {/* Instagram */}
                        <a href="#" aria-label="Instagram" className="group w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-pink-500 hover:bg-pink-50 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500 group-hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        {/* Twitter / X */}
                        <a href="#" aria-label="Twitter" className="group w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-sky-500 hover:bg-sky-50 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500 group-hover:text-sky-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                        {/* Facebook */}
                        <a href="#" aria-label="Facebook" className="group w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a href="#" aria-label="YouTube" className="group w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-red-600 hover:bg-red-50 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500 group-hover:text-red-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter