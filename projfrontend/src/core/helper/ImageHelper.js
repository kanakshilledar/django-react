import React from 'react'

const ImageHelper = ({product}) => {
    const imageurl = product ? product.image 
    : `https://www.google.com/search?q=404&safe=active&client=firefox-b-d&sxsrf=ALeKk02ykklOt-n1NmTfbFnzGOc0v0tIpA:1621858787888&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjTkbXnpuLwAhVJIbcAHZCPDvgQ_AUoA3oECAEQBQ&biw=1920&bih=943#imgrc=JPQQpJwKABGpSM`
    return (
        <div className="rounded border border-success p-2">
            <img src={imageurl}
            style={{maxHeight:"100%", maxWidth:"100%"}}
            className="mb-3 rounded" />
        </div>
    )
}

export default ImageHelper