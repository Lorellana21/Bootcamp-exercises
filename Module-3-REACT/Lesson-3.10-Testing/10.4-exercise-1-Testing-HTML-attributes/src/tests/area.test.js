import area from '../services/area';



test("function getSquareArea returns the area of a square" , () => {
    //arrange
    const number = 3;
    //act
    const result = area.getSquareArea(number);
    //assert
    expect(result).toBe(9);
});

test('function getTriangleArea returns the area of a triangle' , () => {
    //arrange
    const base = 3;
    const height = 4;
    //act
    const result = area.getSquareTriangle(base, height);
    //assert
    expect(result).toBe(6);
});

test('function getSquareArea returns undefined when it has no parameters' , () => {
    // Act
    const result = area.getSquareArea();
    // Assert
    expect(result).toBeUndefined();
  });