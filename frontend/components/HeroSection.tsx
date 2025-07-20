"use client"

import { useState, useEffect } from 'react'

//Dipen prefered hero section 

export const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    
    const images = [
        "/newImages/hero.png",
        // "/newImages/hero2.png", 
        "/newImages/hero3.png"
    ]

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [images.length])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="w-full relative">
            {/* Images with same CSS as before */}
            {images.map((image, index) => (
                <img 
                    key={index}
                    src={image} 
                    alt={`Hero banner ${index + 1}`} 
                    className={`w-full h-auto object-cover transition-opacity duration-700 ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    } ${index === currentSlide ? 'relative' : 'absolute top-0 left-0'}`}
                />
            ))}

            {/* Navigation Arrows */}
            <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10"
            >
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10"
            >
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide 
                                ? 'bg-white scale-110' 
                                : 'bg-white/50 hover:bg-white/75'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}









// 'use client'
// import { useState, useEffect } from 'react'
// import { X } from 'lucide-react'

// // Hero Section mah Explore Deals mah chai it will open babal babal wala offers (directly tyo specific product haru ko product details page open huncha lah ) we shoould include that too 
// //in our admin panel jasma mah admin can put appealing deals for customers specific products ko lagi haii
// //just like tyo right side ko cards haru cha tei ho main 4 ota chai yeta side mah cha aaru chai explore deals ko page mah huncha lah  when we click on explore deals we should open that page

// export const HeroSection = () => {
//   const [isVisible, setIsVisible] = useState(false)
//   const [modalOpen, setModalOpen] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   const stats = [
//     { number: '10K+', label: 'Happy Customers' },
//     { number: '500+', label: 'Premium Products' },
//     { number: '24/7', label: 'Customer Support' }
//   ]

//   const products = [
//     { emoji: '👕', title: 'Premium Apparel', price: 'From $89' },
//     { emoji: '⌚', title: 'Smart Accessories', price: 'From $199' },
//     { emoji: '🎧', title: 'Audio Gear', price: 'From $129' },
//     { emoji: '📱', title: 'Tech Essentials', price: 'From $299' }
//   ]

//   const categories = [
//     { name: 'Electronics', href: '#' },
//     { name: 'Fashion', href: '#' },
//     { name: 'Home & Garden', href: '#' },
//     { name: 'Sports & Outdoors', href: '#' },
//     { name: 'Beauty & Health', href: '#' },
//     { name: 'Books & Media', href: '#' },
//     { name: 'Toys & Games', href: '#' },
//     { name: 'Automotive', href: '#' }
//   ]

//   const handleCategoryClick = (href: string) => {
//     // Handle category navigation here
//     console.log('Navigating to:', href)
//     setModalOpen(false)
//   }

//   return (
//     <>
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           33% { transform: translateY(-10px) rotate(1deg); }
//           66% { transform: translateY(5px) rotate(-1deg); }
//         }
//         @keyframes pulse-custom {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }
//         @keyframes slideInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes slideInRight {
//           from {
//             opacity: 0;
//             transform: translateX(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes floatAround {
//           0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
//           25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
//           50% { transform: translateY(0px) translateX(20px) rotate(180deg); }
//           75% { transform: translateY(10px) translateX(10px) rotate(270deg); }
//           100% { transform: translateY(0px) translateX(0px) rotate(360deg); }
//         }
//         .hero-bg {
//           background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
//         }
//         .hero-bg::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: 
//             radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
//             radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.05) 0%, transparent 50%);
//           animation: float 20s ease-in-out infinite;
//         }
//         .animate-slide-left {
//           animation: slideInLeft 1s ease-out;
//         }
//         .animate-slide-right {
//           animation: slideInRight 1s ease-out;
//         }
//         .animate-pulse-custom {
//           animation: pulse-custom 2s infinite;
//         }
//         .animate-float-1 {
//           animation: floatAround 20s infinite linear;
//         }
//         .animate-float-2 {
//           animation: floatAround 25s infinite linear reverse;
//         }
//         .animate-float-3 {
//           animation: floatAround 30s infinite linear;
//         }
//         .btn-shimmer::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
//           transition: left 0.5s;
//         }
//         .btn-shimmer:hover::before {
//           left: 100%;
//         }
//         .text-gradient {
//           background: linear-gradient(45deg, #1e293b, #475569);
//           background-clip: text;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }
//         .btn-gradient {
//           background: linear-gradient(45deg, #3b82f6, #1d4ed8);
//         }
//         .btn-gradient:hover {
//           background: linear-gradient(45deg, #2563eb, #1e40af);
//         }
//         .product-gradient {
//           background: linear-gradient(45deg, #f1f5f9, #e2e8f0);
//         }
//         .modal-overlay {
//           background: rgba(0, 0, 0, 0.5);
//           backdrop-filter: blur(4px);
//         }
//         .modal-content {
//           animation: modalSlideIn 0.3s ease-out;
//         }
//         @keyframes modalSlideIn {
//           from {
//             opacity: 0;
//             transform: scale(0.9) translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1) translateY(0);
//           }
//         }
//       `}</style>
      
//       <section className="hero-bg min-h-[80vh] relative flex items-center overflow-hidden">
//         {/* Floating Elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute w-20 h-20 bg-blue-500 bg-opacity-10 rounded-full top-1/5 left-1/10 animate-float-1"></div>
//           <div className="absolute w-15 h-15 bg-purple-500 bg-opacity-10 rounded-full top-3/5 right-3/20 animate-float-2"></div>
//           <div className="absolute w-10 h-10 bg-indigo-500 bg-opacity-10 rounded-full bottom-1/3 left-1/5 animate-float-3"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
//           {/* Hero Content */}
//           <div className={`${isVisible ? 'animate-slide-left' : 'opacity-0 transform -translate-x-12'}`}>
//             <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg animate-pulse-custom">
//               <span>🔥</span>
//               <span>Flash Sale - Up to 70% Off</span>
//             </div>
            
//             <h1 className="text-5xl lg:text-7xl font-extrabold text-gradient leading-tight mb-6">
//               Shop Smart, Live Better
//             </h1>
            
//             <p className="text-xl text-gray-600 mb-8 leading-relaxed font-normal max-w-lg">
//               Discover amazing deals on thousands of products. From electronics to fashion, 
//               we&apos;ve got everything you need at unbeatable prices.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 mb-8">
//               <button className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:bg-red-600 hover:transform hover:-translate-y-1 hover:shadow-xl relative overflow-hidden btn-shimmer">
//                 Explore Deals
//               </button>
//               <button 
//                 onClick={() => setModalOpen(true)}
//                 className="bg-white text-gray-700 px-8 py-4 border-2 border-gray-200 rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 hover:transform hover:-translate-y-1 shadow-lg"
//               >
//                 View Categories
//               </button>
//             </div>
            
//             <div className="flex gap-8 mt-8">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <span className="text-2xl font-bold text-gray-800 block">{stat.number}</span>
//                   <span className="text-sm text-gray-600 mt-1">{stat.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Hero Visual */}
//           <div className={`relative ${isVisible ? 'animate-slide-right' : 'opacity-0 transform translate-x-12'}`}>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8">
//               {products.map((product, index) => (
//                 <div 
//                   key={index} 
//                   className="bg-white backdrop-blur-2xl rounded-3xl p-6 border border-gray-200 shadow-lg transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-gray-300"
//                 >
//                   <div className="product-gradient w-15 h-15 rounded-2xl mb-4 flex items-center justify-center text-2xl border border-gray-200">
//                     {product.emoji}
//                   </div>
//                   <div className="text-gray-800 font-semibold mb-2 text-base">{product.title}</div>
//                   <div className="text-blue-600 font-bold text-lg">{product.price}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Categories Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay">
//           <div className="modal-content bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[80vh] flex flex-col">
//             {/* Modal Header */}
//             <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
//               <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
//               <button 
//                 onClick={() => setModalOpen(false)}
//                 className="p-2 rounded-full hover:bg-gray-100 transition-colors"
//               >
//                 <X className="w-6 h-6 text-gray-500" />
//               </button>
//             </div>
            
//             {/* Modal Body - Scrollable */}
//             <div className="p-6 overflow-y-auto flex-1">
//               <div className="grid grid-cols-1 gap-3">
//                 {categories.map((category, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleCategoryClick(category.href)}
//                     className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors text-left border border-gray-100 hover:border-gray-200"
//                   >
//                     <span className="text-lg font-medium text-gray-900">{category.name}</span>
//                     <span className="text-gray-400">→</span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }




















// Black wala theme ko Hero section lah yo bro


// export const HeroSection = () => {
//     const [isVisible, setIsVisible] = useState(false)
//     const [modalOpen, setModalOpen] = useState(false)
  
//     useEffect(() => {
//       setIsVisible(true)
//     }, [])
  
//     const stats = [
//       { number: '10K+', label: 'Happy Customers' },
//       { number: '500+', label: 'Premium Products' },
//       { number: '24/7', label: 'Customer Support' }
//     ]
  
//     const products = [
//       { emoji: '👕', title: 'Premium Apparel', price: 'From $89' },
//       { emoji: '⌚', title: 'Smart Accessories', price: 'From $199' },
//       { emoji: '🎧', title: 'Audio Gear', price: 'From $129' },
//       { emoji: '📱', title: 'Tech Essentials', price: 'From $299' }
//     ]
  
//     const categories = [
//       { name: 'Electronics', href: '#' },
//       { name: 'Fashion', href: '#' },
//       { name: 'Home & Garden', href: '#' },
//       { name: 'Sports & Outdoors', href: '#' },
//       { name: 'Beauty & Health', href: '#' },
//       { name: 'Books & Media', href: '#' },
//       { name: 'Toys & Games', href: '#' },
//       { name: 'Automotive', href: '#' }
//     ]
  
//     const handleCategoryClick = (href: string) => {
//       // Handle category navigation here
//       console.log('Navigating to:', href)
//       setModalOpen(false)
//     }
  
//     return (
//       <>
//         <style jsx>{`
//           @keyframes float {
//             0%, 100% { transform: translateY(0px) rotate(0deg); }
//             33% { transform: translateY(-10px) rotate(1deg); }
//             66% { transform: translateY(5px) rotate(-1deg); }
//           }
//           @keyframes pulse-custom {
//             0%, 100% { transform: scale(1); }
//             50% { transform: scale(1.05); }
//           }
//           @keyframes slideInLeft {
//             from {
//               opacity: 0;
//               transform: translateX(-50px);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }
//           @keyframes slideInRight {
//             from {
//               opacity: 0;
//               transform: translateX(50px);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }
//           @keyframes floatAround {
//             0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
//             25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
//             50% { transform: translateY(0px) translateX(20px) rotate(180deg); }
//             75% { transform: translateY(10px) translateX(10px) rotate(270deg); }
//             100% { transform: translateY(0px) translateX(0px) rotate(360deg); }
//           }
//           .hero-bg {
//             background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
//           }
//           .hero-bg::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background: 
//               radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
//               radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
//             animation: float 20s ease-in-out infinite;
//           }
//           .animate-slide-left {
//             animation: slideInLeft 1s ease-out;
//           }
//           .animate-slide-right {
//             animation: slideInRight 1s ease-out;
//           }
//           .animate-pulse-custom {
//             animation: pulse-custom 2s infinite;
//           }
//           .animate-float-1 {
//             animation: floatAround 20s infinite linear;
//           }
//           .animate-float-2 {
//             animation: floatAround 25s infinite linear reverse;
//           }
//           .animate-float-3 {
//             animation: floatAround 30s infinite linear;
//           }
//           .btn-shimmer::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: -100%;
//             width: 100%;
//             height: 100%;
//             background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
//             transition: left 0.5s;
//           }
//           .btn-shimmer:hover::before {
//             left: 100%;
//           }
//           .text-gradient {
//             background: linear-gradient(45deg, #ffffff, #cccccc);
//             background-clip: text;
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//           }
//           .btn-gradient {
//             background: linear-gradient(45deg, #ffffff, #f0f0f0);
//           }
//           .btn-gradient:hover {
//             background: linear-gradient(45deg, #f8f8f8, #e8e8e8);
//           }
//           .product-gradient {
//             background: linear-gradient(45deg, #333333, #666666);
//           }
//           .modal-overlay {
//             background: rgba(0, 0, 0, 0.5);
//             backdrop-filter: blur(4px);
//           }
//           .modal-content {
//             animation: modalSlideIn 0.3s ease-out;
//           }
//           @keyframes modalSlideIn {
//             from {
//               opacity: 0;
//               transform: scale(0.9) translateY(-20px);
//             }
//             to {
//               opacity: 1;
//               transform: scale(1) translateY(0);
//             }
//           }
//         `}</style>
        
//         <section className="hero-bg min-h-[80vh] relative flex items-center overflow-hidden">
//           {/* Floating Elements */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <div className="absolute w-20 h-20 bg-white bg-opacity-10 rounded-full top-1/5 left-1/10 animate-float-1"></div>
//             <div className="absolute w-15 h-15 bg-white bg-opacity-10 rounded-full top-3/5 right-3/20 animate-float-2"></div>
//             <div className="absolute w-10 h-10 bg-white bg-opacity-10 rounded-full bottom-1/3 left-1/5 animate-float-3"></div>
//           </div>
          
//           <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
//             {/* Hero Content */}
//             <div className={`${isVisible ? 'animate-slide-left' : 'opacity-0 transform -translate-x-12'}`}>
//               <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-lg px-4 py-2 rounded-full text-white text-sm font-medium mb-6 border border-white border-opacity-20 animate-pulse-custom">
//                 <span>🔥</span>
//                 <span>Flash Sale - Up to 70% Off</span>
//               </div>
              
//               <h1 className="text-5xl lg:text-7xl font-extrabold text-gradient leading-tight mb-6">
//                 Shop Smart, Live Better
//               </h1>
              
//               <p className="text-xl text-white text-opacity-80 mb-8 leading-relaxed font-normal max-w-lg">
//                 Discover amazing deals on thousands of products. From electronics to fashion, 
//                 we&apos;ve got everything you need at unbeatable prices.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                 <button className="btn-gradient text-black px-8 py-4 rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 shadow-lg shadow-white shadow-opacity-20 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-white hover:shadow-opacity-30 relative overflow-hidden btn-shimmer">
//                   Explore Deals
//                 </button>
//                 <button 
//                   onClick={() => setModalOpen(true)}
//                   className="bg-white bg-opacity-5 text-white px-8 py-4 border-2 border-white border-opacity-30 rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 backdrop-blur-lg hover:bg-white hover:bg-opacity-10 hover:border-white hover:border-opacity-50 hover:transform hover:-translate-y-1"
//                 >
//                   View Categories
//                 </button>
//               </div>
              
//               <div className="flex gap-8 mt-8">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="text-center">
//                     <span className="text-2xl font-bold text-white block">{stat.number}</span>
//                     <span className="text-sm text-white text-opacity-70 mt-1">{stat.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Hero Visual */}
//             <div className={`relative ${isVisible ? 'animate-slide-right' : 'opacity-0 transform translate-x-12'}`}>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8">
//                 {products.map((product, index) => (
//                   <div 
//                     key={index} 
//                     className="bg-white bg-opacity-5 backdrop-blur-2xl rounded-3xl p-6 border border-white border-opacity-10 transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-3 hover:scale-105 hover:bg-white hover:bg-opacity-10 hover:shadow-2xl hover:shadow-black hover:shadow-opacity-50 hover:border-white hover:border-opacity-20"
//                   >
//                     <div className="product-gradient w-15 h-15 rounded-2xl mb-4 flex items-center justify-center text-2xl border border-white border-opacity-10">
//                       {product.emoji}
//                     </div>
//                     <div className="text-white font-semibold mb-2 text-base">{product.title}</div>
//                     <div className="text-white font-bold text-lg">{product.price}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
  
//         {/* Categories Modal */}
//         {modalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay">
//             <div className="modal-content bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[80vh] flex flex-col">
//               {/* Modal Header */}
//               <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
//                 <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
//                 <button 
//                   onClick={() => setModalOpen(false)}
//                   className="p-2 rounded-full hover:bg-gray-100 transition-colors"
//                 >
//                   <X className="w-6 h-6 text-gray-500" />
//                 </button>
//               </div>
              
//               {/* Modal Body - Scrollable */}
//               <div className="p-6 overflow-y-auto flex-1">
//                 <div className="grid grid-cols-1 gap-3">
//                   {categories.map((category, index) => (
//                     <button
//                       key={index}
//                       onClick={() => handleCategoryClick(category.href)}
//                       className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors text-left border border-gray-100 hover:border-gray-200"
//                     >
//                       <span className="text-lg font-medium text-gray-900">{category.name}</span>
//                       <span className="text-gray-400">→</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </>
//     )
//   }


