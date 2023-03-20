const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution here

// function reducer ()
// {
    let totalBatteries=0;
    for (let i=0; i<batteryBatches.length;i++)
    {
        totalBatteries+= batteryBatches[i];
    }
    console.log(totalBatteries);
// }

