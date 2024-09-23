import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from '../../assets/logo.png';
import backgroundImage from '../../assets/student.png';
import { Link } from 'react-router-dom';


function SignUpPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        studentFullName: '',
        studentId: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [placeholderActive, setPlaceholderActive] = useState({
        fullName: false,
        email: false,
        password: false,
        confirmPassword: false,
        studentFullName: false,
        studentId: false,
    });

    // Toggle password visibility
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Placeholder animation on focus and input
    const handleFocus = (field) => {
        setPlaceholderActive((prev) => ({ ...prev, [field]: true }));
        // Set default value for name fields
        if (field === 'fullName' && !formData.fullName) {
            setFormData((prev) => ({ ...prev, fullName: 'Firstname Middlename Lastname' }));
        }
        if (field === 'studentFullName' && !formData.studentFullName) {
            setFormData((prev) => ({ ...prev, studentFullName: 'Firstname Middlename Lastname' }));
        }
    };

    const handleBlur = (field, value) => {
        if (!value) {
            setPlaceholderActive((prev) => ({ ...prev, [field]: false }));
            // Reset to empty if default value was set
            if (field === 'fullName' && value === 'Firstname Middlename Lastname') {
                setFormData((prev) => ({ ...prev, fullName: '' }));
            }
            if (field === 'studentFullName' && value === 'Firstname Middlename Lastname') {
                setFormData((prev) => ({ ...prev, studentFullName: '' }));
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
            <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden" style={{ maxHeight: '90%', width: '60%', maxWidth: '1200px' }}>
                {/* Left side with image and slogan */}
                <div className="w-3/4 relative bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <h1 className="text-3xl font-bold">Student Result Management System</h1>
                        <p className="text-lg italic mt-2">It's never too late to study</p>
                    </div>
                </div>

                {/* Right side with sign-up form */}
                <div className="w-1/2 p-12 flex flex-col justify-center" style={{ backgroundColor: '#E6F0F3', height: '100%' }}>
                    <div className="text-center mb-8">
                        <p className="text-lg" style={{ color: '#2C387E' }}>Parent Sign up</p>
                    </div>

                    {/* Parent Full Name Input */}
                    <div className="mb-4 relative">
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('fullName')}
                            onBlur={() => handleBlur('fullName', formData.fullName)}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
                            style={{ color: '#2C387E' }}
                        />
                        <label
                            className={`absolute left-3 transition-all duration-200 text-gray-500 ${placeholderActive.fullName || formData.fullName ? 'text-xs -top-2.5' : 'text-base top-3'}`}
                        >
                            Full Name
                        </label>
                    </div>

                    {/* Email Input */}
                    <div className="mb-4 relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('email')}
                            onBlur={() => handleBlur('email', formData.email)}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
                            style={{ color: '#2C387E' }}
                        />
                        <label
                            className={`absolute left-3 transition-all duration-200 text-gray-500 ${placeholderActive.email || formData.email ? 'text-xs -top-2.5' : 'text-base top-3'}`}
                        >
                            Email
                        </label>
                    </div>

                    {/* Password Input */}
                    <div className="mb-4 relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('password')}
                            onBlur={() => handleBlur('password', formData.password)}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
                            style={{ color: '#2C387E' }}
                        />
                        <label
                            className={`absolute left-3 transition-all duration-200 text-gray-500 ${placeholderActive.password || formData.password ? 'text-xs -top-2.5' : 'text-base top-3'}`}
                        >
                            New Password
                        </label>
                        <div className="absolute right-3 top-4 cursor-pointer" onClick={handleShowPassword}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-4 relative">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('confirmPassword')}
                            onBlur={() => handleBlur('confirmPassword', formData.confirmPassword)}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
                            style={{ color: '#2C387E' }}
                        />
                        <label
                            className={`absolute left-3 transition-all duration-200 text-gray-500 ${placeholderActive.confirmPassword || formData.confirmPassword ? 'text-xs -top-2.5' : 'text-base top-3'}`}
                        >
                            Confirm Password
                        </label>
                        <div className="absolute right-3 top-4 cursor-pointer" onClick={handleShowConfirmPassword}>
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    {/* Student Full Name Input */}
                    <div className="mb-4 relative">
                        <input
                            type="text"
                            name="studentFullName"
                            value={formData.studentFullName}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('studentFullName')}
                            onBlur={() => handleBlur('studentFullName', formData.studentFullName)}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
                            style={{ color: '#2C387E' }}
                        />
                        <label
                            className={`absolute left-3 transition-all duration-200 text-gray-500 ${placeholderActive.studentFullName || formData.studentFullName ? 'text-xs -top-2.5' : 'text-base top-3'}`}
                        >
                            Student Full Name
                        </label>
                    </div>

                    {/* Student ID Input */}
                    <div className="mb-4 relative">
                        <input
                            type="text"
                            name="studentId"
                            value={formData.studentId}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('studentId')}
                            onBlur={() => handleBlur('studentId', formData.studentId)}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
                            style={{ color: '#2C387E' }}
                        />
                        <label
                            className={`absolute left-3 transition-all duration-200 text-gray-500 ${placeholderActive.studentId || formData.studentId ? 'text-xs -top-2.5' : 'text-base top-3'}`}
                        >
                            Student ID
                        </label>
                    </div>

                    {/* Sign-up Button */}
                    <button className="w-full bg-blue-600 text-white rounded-full p-3 font-semibold hover:bg-blue-700 transition-colors" style={{ backgroundColor: '#2C387E' }}>
                        Sign up
                    </button>

                    {/* Sign-in and Privacy statement */}
                    <div className="text-center mt-4">
                        <p className="text-sm" style={{ color: '#2C387E' }}>
                        Already have an account? <Link to="/" className="text-blue-500 hover:underline">Sign in here</Link>
                        </p>
                        <p className="text-xs mt-2" style={{ color: '#2C387E' }}>
                            By signing up, you agree to our <a href="#" className="text-blue-500 hover:underline">Terms</a> & <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
