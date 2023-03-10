import React from "react";

import ReactDOM, {createRoot} from "react-dom/client";
 
const Title=()=>{
    return(
        
        <a href="/">
      <img className="logo" alt="logo" src="https://img.freepik.com/free-vector/hand-drawn-world-food-day_23-2148289851.jpg?w=2000"/>
      </a>
      
    )
};

import ReactDOM from "react-dom/client";



const Header=()=>{
    return(
        <div className="header">
       
        <Title/>
        <div className="nav-items">
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        </ul>
        </div>
       
        </div>
        )
    }

   
// config driven ui




const restaurenlist=[
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "242395",
            "name": "Ram Babu Restaurant",
            "uuid": "aa200198-3087-4dbc-8fdc-c18f2c58342f",
            "city": "79",
            "area": "Mithapur",
            "totalRatingsString": "",
            "cloudinaryImageId": "mq1vlwbzjanzdeukja3d",
            "cuisines": [
              "Chinese",
              "North Indian",
              "Biryani"
            ],
            "tags": [
              
            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 0,
            "slugs": {
              "restaurant": "ram-babu-restaurant-kankarbagh-kankarbagh",
              "city": "Patna"
            },
            "cityState": "79",
            "address": "",
            "locality": "Kankarbagh",
            "parentId": 166239,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "60% off",
              "shortDescriptionList": [
                {
                  "meta": "60% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "60% off up to ₹120 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "60% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "60% off up to ₹120 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 1900,
                  "message": ""
                },
                {
                  "name": "BASE_TIME",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.6 kms",
            "hasSurge": false,
            "cta": {
              "link": "swiggy://menu?restaurant_id=242395",
              "type": "DEEPLINK",
              "text": "RESTAURANT_MENU"
            },
            "sla": {
              "restaurantId": "",
              "deliveryTime": 25,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 25,
              "lastMileTravel": 0,
              "lastMileDistance": 0.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.5",
            "totalRatings": 0,
            "new": false
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },
      {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "290590",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "uuid": "ed8430e0-2fc1-4c0d-9d39-bdcb2bb436ff",
            "city": "79",
            "area": "Chitragupta Nagar",
            "totalRatingsString": "",
            "cloudinaryImageId": "iehiemnocsdvcqyyyw6v",
            "cuisines": [
              "Desserts",
              "Ice Cream",
              "Ice Cream Cakes"
            ],
            "tags": [
              
            ],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 0,
            "slugs": {
              "restaurant": "kwality-walls-khajpura-khajpura-5",
              "city": "Patna"
            },
            "cityState": "79",
            "address": "",
            "locality": "Tilak nagar",
            "parentId": 582,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "40% off",
              "shortDescriptionList": [
                {
                  "meta": "40% off | Use SWIGGYIT",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "40% off up to ₹80 | Use code SWIGGYIT",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "40% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use SWIGGYIT",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "40% off up to ₹80 | Use code SWIGGYIT",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 1900,
                  "message": ""
                },
                {
                  "name": "BASE_TIME",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "3 kms",
            "hasSurge": false,
            "cta": {
              "link": "swiggy://menu?restaurant_id=290590",
              "type": "DEEPLINK",
              "text": "RESTAURANT_MENU"
            },
            "sla": {
              "restaurantId": "",
              "deliveryTime": 27,
              "minDeliveryTime": 27,
              "maxDeliveryTime": 27,
              "lastMileTravel": 0,
              "lastMileDistance": 3,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.7",
            "totalRatings": 0,
            "new": false
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },
      {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "411673",
            "name": "Hotel Anand Sagar",
            "uuid": "7fc50655-6517-41c7-a4ff-6c6e00acacaa",
            "city": "79",
            "area": "P.C Colony",
            "totalRatingsString": "",
            "cloudinaryImageId": "umlluzualet7ewvbbwqs",
            "cuisines": [
              "Desserts",
              "Biryani"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 35,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 35,
            "slaString": "35 MINS",
            "lastMileTravel": 0,
            "slugs": {
              "restaurant": "hotel-anand-sagar-kankarbagh-kankarbagh",
              "city": "Patna"
            },
            "cityState": "79",
            "address": "",
            "locality": "Kankarbagh",
            "parentId": 247071,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "40% off",
              "shortDescriptionList": [
                {
                  "meta": "40% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "40% off up to ₹80 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "40% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "40% off up to ₹80 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 1900,
                  "message": ""
                },
                {
                  "name": "BASE_TIME",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5858095~p=3~eid=00000186-270b-b70e-14c6-fef8004e037c~49301",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2.8 kms",
            "hasSurge": false,
            "cta": {
              "link": "swiggy://menu?restaurant_id=411673",
              "type": "DEEPLINK",
              "text": "RESTAURANT_MENU"
            },
            "sla": {
              "restaurantId": "",
              "deliveryTime": 35,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 35,
              "lastMileTravel": 0,
              "lastMileDistance": 2.8,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.0",
            "totalRatings": 0,
            "new": false
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },
      {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "594671",
            "name": "Baskin Robbins",
            "uuid": "86b13325-ef92-4eff-940c-51b08b0ab026",
            "city": "79",
            "area": "Kankarbagh",
            "totalRatingsString": "",
            "cloudinaryImageId": "xkuxeah9zapmo3dlqoyi",
            "cuisines": [
              "Desserts",
              "Ice Cream"
            ],
            "tags": [
              
            ],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 0,
            "slugs": {
              "restaurant": "baskin-robbins-kankarbagh-kankarbagh",
              "city": "Patna"
            },
            "cityState": "79",
            "address": "",
            "locality": "People Cooperative Colony",
            "parentId": 5588,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 1900,
                  "message": ""
                },
                {
                  "name": "BASE_TIME",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2.5 kms",
            "hasSurge": false,
            "cta": {
              "link": "swiggy://menu?restaurant_id=594671",
              "type": "DEEPLINK",
              "text": "RESTAURANT_MENU"
            },
            "sla": {
              "restaurantId": "",
              "deliveryTime": 24,
              "minDeliveryTime": 24,
              "maxDeliveryTime": 24,
              "lastMileTravel": 0,
              "lastMileDistance": 2.5,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 0,
            "new": false
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },
      {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "384886",
            "name": "The Belgian Waffle Co.",
            "uuid": "dcb08e42-754e-4fc5-a032-674f92b45777",
            "city": "79",
            "area": "Kankarbagh",
            "totalRatingsString": "",
            "cloudinaryImageId": "nutuqqhgwsnvnzqlfp18",
            "cuisines": [
              "Waffle",
              "Desserts",
              "Ice Cream",
              "Beverages"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 35,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 35,
            "slaString": "35 MINS",
            "lastMileTravel": 0,
            "slugs": {
              "restaurant": "the-belgian-waffle-co-pc-colony-kankarbagh",
              "city": "Patna"
            },
            "cityState": "79",
            "address": "",
            "locality": "PC Colony",
            "parentId": 2233,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 1900,
                  "message": ""
                },
                {
                  "name": "BASE_TIME",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2.9 kms",
            "hasSurge": false,
            "cta": {
              "link": "swiggy://menu?restaurant_id=384886",
              "type": "DEEPLINK",
              "text": "RESTAURANT_MENU"
            },
            "sla": {
              "restaurantId": "",
              "deliveryTime": 35,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 35,
              "lastMileTravel": 0,
              "lastMileDistance": 2.9,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 0,
            "new": false
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },
      {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "416045",
            "name": "Food Guru",
            "uuid": "c4ff0498-555b-4eab-b490-922290892341",
            "city": "79",
            "area": "Srikrishnapuri",
            "totalRatingsString": "",
            "cloudinaryImageId": "wwimrkvumi1gz2atabzr",
            "cuisines": [
              "Indian",
              "Chinese",
              "Tandoor",
              "Biryani"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 38,
            "minDeliveryTime": 38,
            "maxDeliveryTime": 38,
            "slaString": "38 MINS",
            "lastMileTravel": 0,
            "slugs": {
              "restaurant": "food-guru-srikrishnapuri-srikrishnapuri",
              "city": "Patna"
            },
            "cityState": "79",
            "address": "",
            "locality": "West Boring Canal Road",
            "parentId": 81392,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "BASE_TIME",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5799131~p=8~eid=00000186-270b-b70e-14c6-fefd004e081c~49301",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "4.5 kms",
            "hasSurge": false,
            "cta": {
              "link": "swiggy://menu?restaurant_id=416045",
              "type": "DEEPLINK",
              "text": "RESTAURANT_MENU"
            },
            "sla": {
              "restaurantId": "",
              "deliveryTime": 38,
              "minDeliveryTime": 38,
              "maxDeliveryTime": 38,
              "lastMileTravel": 0,
              "lastMileDistance": 4.5,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.7",
            "totalRatings": 0,
            "new": false
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },
      {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "87401",
            "name": "Amrapali Cafe",
            "uuid": "123bfbd2-9a1d-4c63-bf91-412cc734df17",
            "city": "79",
            "area": "Veerchand Patel Road Area",
            "totalRatingsString": "",
            "cloudinaryImageId": "xuzh778frvo2c8oi81d2",
            "cuisines": [
              "North Indian",
              "Chinese"
            ],
            "tags": [
              
            ],
            "costForTwo": 60000,
            "costForTwoString": "₹600 FOR TWO",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "slaString": "31 MINS",
            "lastMileTravel": 0,
            "slugs": {
              "restaurant": "amrapali-cafe-fraser-road-fraser-road",
              "city": "Patna"
            },
            "cityState": "79",
            "address": "",
            "locality": "Fraser Road",
            "parentId": 31959,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "60% off",
              "shortDescriptionList": [
                {
                  "meta": "60% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "60% off up to ₹120 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "60% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "60% off up to ₹120 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 1900,
                  "message": ""
                },
                {
                  "name": "BASE_TIME",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2.5 kms",
            "hasSurge": false,
            "cta": {
              "link": "swiggy://menu?restaurant_id=87401",
              "type": "DEEPLINK",
              "text": "RESTAURANT_MENU"
            },
            "sla": {
              "restaurantId": "",
              "deliveryTime": 31,
              "minDeliveryTime": 31,
              "maxDeliveryTime": 31,
              "lastMileTravel": 0,
              "lastMileDistance": 2.5,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 0,
            "new": false
          },
          "subtype": "basic"
        },
    },
    ]
    




    const RestaurentCard=({name,cuisines,locality,cloudinaryImageId})=>{
    
    return(
            <div className="card">
            <img src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
            <h5>{name}</h5>
            <h5>{cuisines}</h5>
            <h5>{locality}</h5>
           
            </div>

        )
    }

    const Body=()=>{
        return(
            
            <div className="res-list">
           {
            restaurenlist.map((restaurant)=>{
                return(
                    <RestaurentCard{...restaurant.data.data} key={restaurant.data.id} />
                )
            })
           }
            </div>
           
        )
    }


    const Footer=()=>{
        return(
            
            <h3>Footer</h3>
            
        )
    }

    
const AppLayout=()=>{
            return(
                <React.Fragment>
                <Header/>
                <Body/>
                <Footer/>
                
                </React.Fragment>
            )
        }
  


const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
