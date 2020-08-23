
export const companies = [
    {
        name: "Apple",
        price: 458.83,
        logo: "https://seeklogo.com/images/A/apple-logo-52C416BDDD-seeklogo.com.png"
    },
    {
        name: "Facebook",
        price: 261.16,
        logo: "https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Facebook-Logo.png?fit=600%2C600"
    },
    {
        name: "Google",
        price: 1516.24,
        logo: "https://cdn.vox-cdn.com/thumbor/2eZPJ-j9zXm5AIro7TIiEBCgNoc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/3218223/google.jpg"
    },

]


export function getStocks(input) {
    let newStocks = []
    for (let i = 0; i < input.length; i++) {
        let multiplier = Math.random() * 0.1 - 0.05;
        input[i].price = Number(parseFloat(input[i].price * multiplier + input[i].price).toFixed(2));
        newStocks.push(input[i]);
    }
    return newStocks;
    
}