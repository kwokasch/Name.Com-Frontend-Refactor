import React from 'react'

export default function Result({result}) {
    return (
        <div className='result'>
            {
                result.purchasable
                ? <div>
                    <h4>Hooray! '{result.domainName}' is available for purchase!</h4>
                    <h5>Purchase Price: {result.purchasePrice}</h5>
                    <h5>Purchase Type: {result.purchaseType}</h5>
                    <h5>Renewal Price: {result.renewalPrice}</h5>
                    </div>
                : <h4>Sorry, '{result.domainName}' is not available.</h4>
            }
        </div>
    )
}
