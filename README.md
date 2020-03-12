# Shipments Tracking System Interface

![](/screenshots/main.png)

# Contents
- [The Most Interesting Bits](#interesting)
- [How to Start](#start)
- [Guide](#guide)
- [Styling](#styling)
- [Testing](#testing)

<a href='interesting' />
# The Most Interesting Bits

I think the Cypress testing was the most interesting and challenging part of this project.

It has been used to emulate both desktop and mobile usage.

An interesting test is to confirm the successful renaming of a shipment. All user clicks and keyboard input, from the homepage till the actual renaming, are emulated. Any data required is picked directly from the elements' attributes:

```
it('Desktop: takes user to Details Page, user starts typing when clicking Info, and commits. Page should be displaying the new name', () => {
  cy.get('[data-cy=info]:first')
    .click()
    .get('[data-cy=rename-button]')
    .click()
    .get('[data-cy=renamer-input]')
    .type(newName)
    .get('[data-cy=renamer-ok]')
    .click()
    .get('[data-cy=rename-button]')
    .invoke('attr', 'value')
    .should('equal', newName)
})
```

Another intersting test is to confirm that the Search feature actually takes the user to the correct Details Page.



<a href='start' />
# How to Start
- `npm i`
- Build with `npm run build`
- Start the json-server with `npm run server`
- Start the client server with `npm run start` or `node server`
- Optional: instruct webpack to watch changes after each file save: `npm run watch`

## How to Start Cypress
- From terminal run `npm run cypress:open`
- Wait for the Cypress app to load
- At the top right corner of the Cypress app, press 'Run all specs'

<a href='guide' />
# Guide
Being a small app, Redux was not used.

Instead, state is managed via Hooks.

A `useEffect` hook fetches the shipments data and updates the state.

## Pagination

The footer has a changing-page feature.

![](/screenshots/pagination.png)

20 shipments per page can be viewed but this can be altered by changing `SHIPMENTS_PER_PAGE` in `src/constants.js`. The max number of pages at the footer will update accordingly.

Hollow arrows are not clickable, whereas filled arrows will take the user to the next/previous page.

## Sorting

The shipments can be sorted by clicking on column headers. Hollow arrows will turn into filled arrows the moment they are clicked and the data is sorted accordingly. Clicking multiple times on the same column header will alternate the sorting order.

## Searching

Clicking on the magnifying glass at the top-right of the screen will open a search bar that can be used to search shipments by Shipping ID.

If the search fails, the user is notified accordingly.

Else the user is redirected to the Details Page.

## The Details Page

Each shipment row feature an 'i' icon which when clicked redirects the user to the respective Shipment Details page.

## Renaming a Shipment

In the Details Page, a 'Rename' button appears after the 'Name' field. Clicking this button will open an input-bar that allows the user to enter a new name.

![](/screenshots/rename.png)

A `fetch` with a `PUT` method calls the api to update the respective data. The state is only updated if this call is successful.

```
fetch(url, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
.then(response => {
  if(response.ok) {
    const newShipmentsData = getUpdatedShipmentsData(shipments.data, shipmentId, newName)
    setShipments({ ...shipments, data: newShipmentsData })
  }
  ```


<a href='styling' />
# Styling

Styled Components has been used for CSS. A theme file supplies common styling, such as colors, across the entire app:

```
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>, root)
```

Styles can thus be picked from any component without any additional importing, such as:

`background-color: ${props => props.theme.colors.header};`

Had the application been larger, styled-system would have facilitated matters even more.


<a href='responsive' />
# Responsive App

Displaying a table on a mobile screen can be challenging, with different people have differing views on whether it looks congested or not.

I opted to use different tables between desktop and mobile versions.


<a href='testing' />
# Testing

## Jest: Unit Testing

All helper functions in the `src/utils` directory are accompanied by a jest test.

## Cypress: E2E Testing

Cypess is used to emualte a user's functionality such as navigating the app, searching for a shipment, and renaming a shipment.

Tests are available at `cypress/integration`
