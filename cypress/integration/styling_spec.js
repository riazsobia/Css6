describe('Styling', () => {
    it("Name header has the correct font", () => {
      cy
      .get('h1')
      .should('have.css', 'font-family', 'Luminari').and('have.css', 'color', 'rgb(0, 0, 255)')
    })
    it("Unordered lists don't have bullet points", () => {
        cy
        .get('ul')
        .should('have.css', 'list-style-type', 'none')
    })
    it("Font weights in ordered lists is bold", () => {
        cy
        .get('ol')
        .should('have.css', 'font-weight', '700')
    })
    it("List items are centered", () => {
        cy
        .get('li')
        .should('have.css', 'text-align', 'center')
    })
    it("List items have a 1px red boarder with curved corners", () => {
        cy
        .get('li')
        .should('have.css', 'border', '1px solid rgb(255, 0, 0)').and('have.css', 'border-radius', '10px')
    })
    it("List items have a blue font with a light pink background color", () => {
        cy
        .get('li')
        .should('have.css', 'color', 'rgb(0, 0, 255)').and('have.css', 'background-color', 'rgb(255, 182, 193)')
    })
    it("Images are 200px tall", () => {
        cy
        .get('img')
        .should('have.css', 'height', '200px')
    })
    it("Font is the body is san-serif", () => {
        cy
        .get('body')
        .should('have.css', 'font-family', 'sans-serif')
    })
    it("h3s are underlined", () => {
        cy
        .get('h3')
        .should('have.css', 'text-decoration-line', 'underline')
    })
    it("p tags have padding of 20 on the top and bottom", () => {
        cy
        .get("p")
        .should('have.css', 'padding-top', '20px').and('have.css', 'padding-bottom', '20px')
    })
    it("h1 tags have a size of 30", () => {
        cy
        .get("h1")
        .should('have.css', 'font-size', '30px')
    })
    it("List items have 30 px of padding on the left", () => {
        cy
        .get("li")
        .should('have.css', 'padding-left', '30px')
    })
    it("Has a background color", () => {
        cy
        .get("html")
        .should('not.have.css', 'background-color', 'transparent')
    })
})