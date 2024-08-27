
export const getExpectedValue = async (dealerUpCard, playerHand, deviation)=> {
    var expectedValueResponse = null;

    // const body = {
    //     dealerUpCard: `${dealerUpCard}`,
    //     executionTimes: "20000",
    //     action: `${deviation}`,
    //     hand: `${playerHand}`
    // };

    // const request = new Request("http://localhost:8080/v1/run-experimental-strategy", {
    //     method: "POST",
    //     body: JSON.stringify(body)
    // });


    // try {
    //     const response = await fetch(request);
    //     console.log(response);

    //     const json = await response.json();
    //     expectedValueResponse = json;
    //     console.log(json);
    // } catch (error) {
    //     console.error(error);
    // };


    const url = `http://localhost:8080/v1/run-experimental-strategy?dealerUpCard=${dealerUpCard}&executionTimes=20000&action=${deviation}&hand=${playerHand}`;


    try {
        const response = await fetch(url);
        console.log(response);

        const json = await response.json();
        expectedValueResponse = json;
        console.log(json);
    } catch (error) {
        console.error(error);
    };

    return expectedValueResponse;
};