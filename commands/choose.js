module.exports={
    name : 'choose',
    description : 'Used to randomly choose one from a list',
    async execute(client,message,args,Discord){
        let len=args.length;
        if(len==0)
            message.channel.send('```Please use the format:\n~choose item1 item2 item3 ....```');
        else{

        let idx=Math.random()*len;
        // idx=idx-(idx%1);
        // console.log(Math.random()*len);`
        // console.log(args);
        // console.log(idx);
        idx=Math.floor(idx);
        // console.log(idx); 
        // console.log(args[idx]);
        message.channel.send('```'+`Oni-Chan chooses: ${args[idx]}`+'```');

        }
    }
}