export const postRestaurant = async( username, password, restaurant_name ) => {
  const initialFetch = await fetch('/api/v1/restaurants', {
    method: 'POST',
    body: JSON.stringify({ username, password, restaurant_name }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
  return await initialFetch.json();
}

export const postRestaurantDetails = async() => {
  const initialFetch = await fetch('')
}