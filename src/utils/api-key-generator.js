const numerics = [0,1,2,3,4,5,6,7,8,9];
const lowerAlphabets = ["aldodospem","bdjddkieow","cmdkdkdlkeele","delelelkldiejej","eskjdksdj","fudndksjssks","gjdkweajennj","hjnejdeuddek","jdmlsdjdkds","jhjsbheheww","kdwbhdwbhjwgwd","ndiwsjsjnl","msjskjnsdsdkns","npskshsgs","ortsdspawhxzvc","prtaeudsabnxzfa","qagssbhdxgy","rsjbhasuwajiw","smcvbdfsarwoia","tpoeydbxzfs","ussavasbhassa","vshbwgdwfss","wvcnxmdsjadbas","xsswgvwshws","ysjawgvwl","zijoeguysbh"];
const capsAlphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const AlphaNumerics = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const generateApiKey = ()=>{
    const apiKey = lowerAlphabets[Math.floor(Math.random()*24)] + "_" + numerics[Math.floor(Math.random()*10)] + "_" + capsAlphabets[Math.floor(Math.random()*24)] + "_" + AlphaNumerics[Math.floor(Math.random()*24)]
    console.log("API Key",apiKey);
    return apiKey
}