import React from 'react'
import './Immagenav8.css'
const Imagenav8 = () => {
    const contents=[
        {
            id:1,
            content:"Shop wardrobe basics and the latest trends in clothing, shoes and accessories. Find new-season dresses for every occasion, finishing the outfit with your choice in bags and heels to match. Refresh your dresser with top-drawer lingerie staples and classic watches for your jewellery box. After investment pieces? THE ICONIC is your designer destination - find your favourite homegrown and international labels.",
            title:"Women"
        },
        {
            id:2,
            content:"All menswear needs are covered in THE ICONIC’s men’s collection. Formal wear and smart-casual occasions are sorted with pants, coats and jackets in timeless cuts, while everyday essentials like t-shirts, jeans, sneakers and caps are prepped for the off-duty roster.",
            title:"Men"
        },
        {
            id:3,
            content:"Restock your bathroom cabinet and cosmetic case with your favourite beauty products. Build your makeup kit with the latest must-haves and holy-grail classics, whether you’re adding a new shade of lipstick or personal fragrance.Skincare is sorted with ingredient innovations, while bath and body care canhelp create your ultimate self-care routine.",
            title:"Beauty"
        },
        {
            id:4,
            content:"Smash your goals with sports shoes and technical apparel for the gym and beyond. Find the best performance and running shoe options within a huge range for training and the outdoors, plus compressions gear to move with you as you beat your personal bests, as well as travel bags to stash and store your equipment.",
            title:"Sports"
        },
        {
            id:5,
            content:"Home makeover time? Discover homewares to suit your aesthetic. Refresh your linen cupboard and transform your space with cosy blankets and throws, plus quilt covers, sheets and bedding. Invite comfort with diffusers and home fragrance to personalise the ambience, then stock up the kitchen with daily essentials, from water bottles to ingenious home living solutions.",
            title:"Home"
        },
        {
            id:6,
            content:"The whole family is sorted with kidswear for all ages, with plenty of styles to suit their needs as they grow. From baby sizes to girls and boys, our range reaches into teens as their personal style evolves. We’re here year-round for gifting needs with all the crazes in kids toys, less the crowds. We’re more than online clothing. We’re everything you need, all in one place, delivered to your doorstep. THE ICONIC is your home of style in Australia and New Zealand, also offering a shoppable Considered Edit. Shop when it suits you and enjoy our famously fast shipping.",
            title:"Kids"
        },
        
    ]
  return (
    <>
    <div className="imagenav8container">
        <div className="imagenav8content">
            <div className="imagenav8title"><h2>Shop For The Latest Clothing, Shoes, Home & Beauty Products</h2></div>
            <div className="imagenav8maincontent"><p>Delivering new arrivals from the biggest brands and exclusive labels, THE ICONIC is your go-to for clothing, footwear, sportswear, beauty, home and kidswear, established as Australia’s leading online fashion and lifestyle retailer.</p></div>
            <div className="imagenav8row">
{contents.map((item)=>{
    return <div className="imagenav8col">
        <div className="imagenav8coltitle"><h3>{item.title}</h3></div>
        <div className="immagenav8colcontent"><p>{item.content}</p></div>
    </div>
})}
            </div>
        </div>
    </div>
    </>
  )
}

export default Imagenav8