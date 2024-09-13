import { formatToINR } from "../global/convert-to-inr";
import {  FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { useState } from "react";
import { GoPlus, GoDash } from "react-icons/go";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";


const ProductItem = ({ colors, setActiveProductColor, name, discount, message, price, img, productId  }) => {
    productId = encodeURIComponent(productId) //Bad code 
    const navigate = useNavigate();  
    const [bookmark, setBookmark] = useState(false)
    const [addToCart, setAddToCart] = useState(false)
    const [productCount, setProductCount] = useState(0)

    const handleBookmark = ()  => {
      setBookmark(!bookmark);
      if(bookmark) {
        toast.success("Product removed from your whishlist")
      } else {
        toast.success("Product added to your whishlist")
      }
    }

    const handleAddtocard = (action) => {
      if (action === "add") {
        setProductCount(productCount + 1)
        toast.success("Product added to cart")
      } else {
        if (productCount > 0) {
          setProductCount(productCount - 1)
          toast.success("Product removed from cart")
        }
      }
    }

    const productClickHandler =()=>{
      // const encodedProductId = encodeURIComponent(productId);
      // navigate(`/product/${encodedProductId}`);
    }

    return (
      <Link to={`/product/${productId}`}>
      <div className="font-sans max-w-sm cursor-pointer hover:brightness-75" onClick={productClickHandler} >
        <div className="w-full md:h-[400px] h-[477px] lg:h-[477px] relative">
          <img 
            src={img}
            alt={`product-model-${name}`}
            className=" w-full h-full object-cover"
          />
          <div className="absolute w-full bottom-0">
            <div className="flex gap-2.5 p-3">
              {discount && (
                <div className="bg-white text-black font-medium px-2 cursor-default">{discount}% off</div>
              )}
              {message && (
                <div className="bg-white text-black font-medium px-2 cursor-default">{message}</div>
              )} 
            </div>
          </div>
        </div>
        <div className="py-2">
          <h1 className="font-semibold py-2">{name}</h1>
          <div className="flex justify-between items-center">
            <div className="font-mono text-base">INR {formatToINR(price)}</div>
            {colors && (
              <div className="flex items-center gap-2">
                {colors.map((color, index) => (
                  <ProductColor 
                    key={index} 
                    color={color} 
                    active={false}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between py-2">
            <div className="flex text-xl items-center cursor-pointer gap-2">
              <div className="border w-8 h-8 grid place-items-center cursor-pointer" onClick={() => handleAddtocard("add")}><GoPlus /></div>
              <div>{productCount}</div>
              <div className="border w-8 h-8 grid place-items-center cursor-pointer" onClick={() => handleAddtocard("remove")}><GoDash /></div>
            </div>
            <div className="font-medium flex gap-1 items-center cursor-pointer" onClick={handleBookmark}>
                {bookmark ? (
                    <FaBookmark />
                ) : (
                    <FaRegBookmark />
                )}
                Wishlist
            </div>
        </div>
      </div>
      </Link>
      
    );
  }
  
  export default ProductItem;
  
  function ProductColor({ color, active }) {
    return (
      <div 
        className={`w-6 aspect-square rounded-full grid place-items-center cursor-pointer ${active ? "border-2 border-gray-400" : "border-none"}`}
        >
        <div className="w-4 aspect-square rounded-full"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      
    );
  }
  