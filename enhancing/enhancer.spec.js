const enhancer = require('./enhancer.js');
// test away!

describe("enhancer", () => {

    describe("success", () => {

        it("enhance item by 10", () => {
            const item = {
                name: "sword",
                enhancement: 7,
                level: 3,
            };

            const succeed = enhancer.succeed(item);

            expect(succeed.enhancement).toBe(7);
        });


        it("should not enhance and return item", () => {
            const item = {
                name: "sword",
                enhancement: 7,
                level: 10,
            };

            const succeed = enhancer.succeed(item);

            expect(succeed.enhancement).toBe(17);
        });
    });


    describe("failure", () => {

        it("lower enhancement by 1 if enhancement level is not high enough", () => {
            const item = {
                name: "sword",
                enhancement: 7,
                level: 3,
            };

            const fail = enhancer.fail(item);

            expect(fail.enhancement).toBe(6);
        });
    });


    describe("repair", () => {

        it("repair durabilty of item", () => {
            const item = {
                name: "sword",
                durability: 2,
            };

            const repair = enhancer.repair(item);

            expect(repair.durability).toBe(100);
        });

    });

});