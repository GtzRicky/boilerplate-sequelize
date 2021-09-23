const userService = require("../../src/services/users.services");
const faker = require("faker");
const getDataValues = require("../../src/utils/sequelize");

describe("Probando los servicios de usuarios", () => {
    let userId = 0;
    let userCreated = {};

    let newUser = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(8),
      phone: faker.phone.phoneNumber('+52(###)#######')
    }
  
    afterAll( async () => {
        try {
            await userService.delete(userId);
        } catch (error) {
            throw error;
        }
    });

    beforeAll( async () => {
        userCreated = await userService.create(newUser);
      });    

    it("Debería obtener un arreglo al llamar el método getAll", async () => {
        //AAA
        // Arrange
        //Act
        const results = await userService.getAll();
        //Assert
        expect(results).toEqual(expect.any(Array));
    });

    it("Debería obtener un objeto al llamar el método geyById", async () => {
        //Arrange
        const id = 13;
        // Act
        const result = await userService.getById(id);
        //Assert
        expect(result).toEqual(expect.any(Object));
    });

    it("Debería obtener un objeto con los datos del usuario que acabamos de insertar en ls DB", async () => {
        //Arrange
        const user = {
            firstname: "Felipe",
            lastname: "Gutierrez",
            email: "felipe.gtz@email.com",
            password: "felipe12",
            phone: "5513498679"
        };
        // Act
        const result = await userService.create(user);
        // Assert
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("id");
        expect(result).toHaveProperty("firstname", "Felipe");
    });

    it("Debería de regresar true al actualizar el registro de forma satisfactoría", async() => {
        //AAA
        userCreated.firstname = "Hector";
        userCreated = getDataValues(userCreated);
        let result = await userService.update(userCreated, userCreated.id);
        expect(result).toBeTruthy();
      });
    
      it("Debería de regresar true al eliminar el registro de forma satisfactoría", async() => {
        //AAA
        let result = await userService.delete(userCreated.id);
        expect(result).toBeTruthy();
      });
    
});