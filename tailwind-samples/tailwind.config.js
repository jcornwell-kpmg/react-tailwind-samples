module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'cust-blue': '#2e6191',
        'cust-blue-lighter': '#2e6191B3',
        'cust-gray': '#d4d3d3',
        'cust-gray-lighter': '#e9e9e9',
        'cust-dark-gray': '#8b8b8b',
        'cust-dark-gray-lighter': '#a8a8a8',
        'cust-zinc': '#faf9f9e6'
      },
      borderWidth: {
        '3': '3px',
        '5': '5px'
      },
      borderRadius: {
        '2rem': '2rem'
      }
    },
  },
  plugins: [],
}
