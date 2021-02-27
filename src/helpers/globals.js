// return the user data from the session storage
export const getUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  else return null;
}

// return the token from the session storage
export const getToken = () => {
  return localStorage.getItem('token') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem('token');
}

// set the token and user from the session storage
export const setUserSession = (token) => {
  localStorage.setItem('token', token);
}


// remove user carts
export const removeUserCart = () => localStorage.removeItem('user-carts');

// get user carts
export const getUserCart = () => {
  const userCarts = localStorage.getItem('user-carts');
  return userCarts ? JSON.parse(userCarts) : [];
}


// display current date
export const displayDate = () => {
  const today = new Date();
  var dd = ("0" + today.getDate()).slice(-2)
  var mm = ("0" + (today.getMonth() + 1)).slice(-2)
  var yyyy = today.getFullYear();

  const dateToday = `${mm}-${dd}-${yyyy}`;

  return dateToday;
}


const date = new Date();
    // days
    const days = [];
    for (let day = 1; day <= 31; day++) {
    let dateFormat = { value: day, label: day, name: 'day'};
    days.push(dateFormat);
}
// months
export const numToMonth = (num) => {
    var months = [
        'Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
    ];
    return months[num - 1];
}
// years
const years = [];
  for (let year = 1905; year <= date.getFullYear(); year++) {
  let yearFormat = {value: year, label: year, name: 'year'};
  years.push(yearFormat);
}

// is Today 
export const isToday = (date) => {
  const today = new Date()
  return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
};

export const priceFormat = (number, decimal = 2, comma = true) => {
    if(comma){
      return Number(parseFloat(number).toFixed(decimal)).toLocaleString('en', {
          minimumFractionDigits: decimal
      });
    }
    else{
      return Number(parseFloat(number).toFixed(decimal));
    }
}