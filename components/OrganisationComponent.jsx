// import React from 'react'

// function OrganisationComponent(props) {
//     return (
//         <div>
//             <h1>Name : {props.organisation.tokenName}</h1>
//             <h1>Token Symbol : {props.organisation.tokenSymbol}</h1>
//             <h1>Organisation Address : {props.organisation.contractAddress}</h1>
//             <h1>Admin : {props.organisation.admin}</h1>
//         </div>
//     )
// }

// export default OrganisationComponent
import React from 'react'

function OrganisationComponent(props) {
    const { tokenName, tokenSymbol, contractAddress, admin } = props.organisation

    return (
        <div className="rounded-lg shadow-md hover:shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2">
          <h1 className="text-2xl font-bold">{tokenName}</h1>
          {/* <h2 className="text-base">{tokenSymbol}</h2> */}
        </div>
        <div className="p-4 bg-gray-100">
          <p className="text-gray-700 mb-2 font-semibold">Organisation Address:</p>
          <p className="text-gray-900 mb-4">{contractAddress}</p>
          <p className="text-gray-700 mb-2 font-semibold">Admin:</p>
          <p className="text-gray-900">{admin}</p>
        </div>
      </div>      
    )
}

export default OrganisationComponent
