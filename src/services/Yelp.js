// example data
// const data = {"id":"tDPO_D0tjoWUOzqgRUcDkA","alias":"genes-chinese-flatbread-cafe-boston","name":"Gene's Chinese Flatbread Cafe","image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/ytwNy6Z3NTCfYj1Ah-YJsA/o.jpg","is_claimed":true,"is_closed":false,"url":"https://www.yelp.com/biz/genes-chinese-flatbread-cafe-boston?adjust_creative=GvdcJNSbN4RfiAFboYH3og&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=GvdcJNSbN4RfiAFboYH3og","phone":"+16174821888","display_phone":"(617) 482-1888","review_count":288,"categories":[{"alias":"chinese","title":"Chinese"},{"alias":"noodles","title":"Noodles"}],"rating":4,"location":{"address1":"86 Bedford St","address2":"","address3":"","city":"Boston","zip_code":"02111","country":"US","state":"MA","display_address":["86 Bedford St","Boston, MA 02111"],"cross_streets":"Kingston St & Chauncy St"},"coordinates":{"latitude":42.3534194,"longitude":-71.0595619},"photos":["https://s3-media3.fl.yelpcdn.com/bphoto/ytwNy6Z3NTCfYj1Ah-YJsA/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/d4f4tiluGa9uOUlyS8wUbg/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/1Nobub7Ufnogm30nQEOr7Q/o.jpg"],"price":"$","hours":[{"open":[{"is_overnight":false,"start":"1100","end":"1830","day":0},{"is_overnight":false,"start":"1100","end":"1830","day":1},{"is_overnight":false,"start":"1100","end":"1830","day":2},{"is_overnight":false,"start":"1100","end":"1830","day":3},{"is_overnight":false,"start":"1100","end":"1830","day":4},{"is_overnight":false,"start":"1130","end":"1900","day":5}],"hours_type":"REGULAR","is_open_now":false}],"transactions":[]}


export function getListYelpData (id) {
  return fetch(`http://localhost:8080/https://api.yelp.com/v3/businesses/${id}`, {
    method: 'GET',
    headers: {
      "Authorization": "Bearer bTCZl3M-_amKqI93FmeRYEroM3KDSbpoBde6J87SYf4ndyUzrpbZYR6ZuOXQZw5YVk5eb8OHjeWXZVlzu32mnxkw8YH-8uDnUPiUtB1aCoaNHrIYp-YdVFhnLUvFW3Yx"
    }
  }).then(response => {
  	if (response.status !== 200) {
  		console.error(`Yelp fetch failed: ${response.status}`);
  		return {};
  	} else {
  		return response.json();
  	}
  }).catch(() => {})
}