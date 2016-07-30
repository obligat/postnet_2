class initAction{
    static init(cmd) {
        switch (cmd) {
            case '1':
                return 'number';
            case '2':
                return 'barcode';
            case 'q':
                process.exit(0);
                return;
            default:
                console.log(`Error input!`);
                return   'init'
        }
    }
}

module.exports=initAction;