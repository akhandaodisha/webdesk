export class ConfigConstants {

    public static siteAvailable = true;

    public static firebaseConfig = {
        apiKey: 'AIzaSyAYpIGTFE77tjQ_os8FqB96J_N9uuIOftw',
        authDomain: 'akhandaodisha-memberdb.firebaseapp.com',
        databaseURL: 'https://akhandaodisha-memberdb.firebaseio.com',
        projectId: 'akhandaodisha-memberdb',
        storageBucket: 'akhandaodisha-memberdb.appspot.com',
        messagingSenderId: '783468226874'
    };

    public static twitterApi = {
        twitterUrl: 'https://cdn.syndication.twimg.com/widgets/followbutton/info.json',
        twitterApiParams: {
            'screen_names': 'akhandaodisha'
        }
    };

    public static youtubeApi = {
        youtubeUrl: 'https://www.googleapis.com/youtube/v3/channels',
        youtubeApiParams: {
            'id': 'UCxxqAIGzFcw12FsIp1xjVbQ',
            'key': 'AIzaSyB20sUi481Avr5tXWQRkM3ZZvqJxVcDOm4',
            'part': 'statistics'
        }
    };

    public static facebookApi = {
        facebookUrl: 'https://graph.facebook.com/v3.0/',
        facebookPageId: '354845204931461',
        facebookApiParams: {
            // tslint:disable-next-line:max-line-length
            'access_token': 'EAAUoW6fv8OMBACcYs3Qm7BQXA7rN6Y3IiF5vQWPrZBZBhFfe625Q4TIZBPNlhtZCYRMkLeifZC3Biz3iJcZCUTGZBMw1mTFa8lmCde9lzE4qySJvd24Ed5LBk7wFDe3dxBn2T09L7NMSdeCvjkV4uX3TZByRXpzUNbXYsJKum3wGtwZDZD',
            'fields': 'fan_count'
        },
    };

    public static header = {
        statictext: 'ଅଖଣ୍ଡ ଓଡ଼ିଶା',
        subtitletext: 'ଵୃହତ ଓଡ଼ିଶା, ସମୃଦ୍ଧ ଓଡ଼ିଶା'
    };

    public static aboutPage = {
        pageTitle: 'ଆମ ବିଷୟରେ',
        // tslint:disable-next-line:max-line-length
        pageContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Odio morbi quis commodo odio aenean. Maecenas'
    };

    public static aimPage = {
        pageTitle: 'ଆମର ଲକ୍ଷ୍ୟ',
        // tslint:disable-next-line:max-line-length
        pageContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Odio morbi quis commodo odio aenean. Maecenas'
    };

    public static contactPage = {
        pageTitle: 'ଆମକୁ ଯୋଗାଯୋଗ କରନ୍ତୁ',
        staticContact: [
            { icon: 'mail', text: 'akhandaodisha@gmail.com' },
            { icon: 'phone', text: '9009009009' },
            { icon: 'account_balance', text: 'Bishwanath Bhaban, VIP Colony, IRC Village, Nayapalli, Bhubaneswar, Odisha 751015' }
        ],
        // tslint:disable-next-line:max-line-length
        googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1116654997727!2d85.80089951449047!3d20.295644586400087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19099bb022114b%3A0x33424c18f417bd29!2sBishwanath+Bhaban!5e0!3m2!1sen!2sin!4v1532201979663',

        form: {
            name: {
                label: 'ଆପଣଙ୍କ ନାମ', hint: 'ଏଠାରେ ଆପଣଙ୍କ ନାମ ଲେଖନ୍ତୁ', requiredError: 'ଆପଣଙ୍କ ନାମ ଆବଶ୍ୟକ ଅଟେ', patternError: ''
            }, email: {
                // tslint:disable-next-line:max-line-length
                label: 'E-mail ଠିକଣା', hint: 'ଏଠାରେ ଆପଣଙ୍କ E-mail ଠିକଣା ଲେଖନ୍ତୁ', requiredError: 'ଆପଣଙ୍କ E-mail ଠିକଣା ଆବଶ୍ୟକ ଅଟେ', patternError: 'ଦୟାକରି ସଠିକ E-mail ଠିକଣା ଦିଅନ୍ତୁ'
            }, phone: {
                // tslint:disable-next-line:max-line-length
                label: 'Mobile', hint: 'ଏଠାରେ ଆପଣଙ୍କ Mobile Number ଲେଖନ୍ତୁ', requiredError: 'ଆପଣଙ୍କ Mobile Number ଠିକଣା ଆବଶ୍ୟକ ଅଟେ', patternError: 'ଦୟାକରି ସଠିକ Mobile Number ଦିଅନ୍ତୁ'
            }, message: {
                // tslint:disable-next-line:max-line-length
                label: 'ଏଠାରେ ନିଜର ବାର୍ତ୍ତା ସଂକ୍ଷେପରେ ଲେଖନ୍ତୁ', hint: '', requiredError: 'ଆପଣଙ୍କ ବାର୍ତ୍ତା ଆବଶ୍ୟକ ଅଟେ', minError: 'ଆପଣଙ୍କ ବାର୍ତ୍ତାଟି ଅସମ୍ପୂର୍ଣ୍ଣ ଅଟେ', maxError: 'ଦୟାକରି ନିଜର ବାର୍ତ୍ତାକୁ ୧୫୦ ଅକ୍ଷର ମଧ୍ୟରେ ସୀମିତ ରଖନ୍ତୁ'
            },
            submitText: 'ବାର୍ତ୍ତା ପଠାନ୍ତୁ'
        },
        successData: {
            // tslint:disable-next-line:max-line-length
            iconName: ['fas', 'check-circle'], class: 'success-icon-color', content: 'ଧନ୍ୟବାଦ ! ଆପଣଙ୍କ ବାର୍ତ୍ତାଟି ଆମ ପାଖରେ ପହଞ୍ଚି ଯାଈଛି | ଆମେ ୪୮ ଘଣ୍ଟା ମଧ୍ୟରେ ଆପଣଙ୍କୁ ଯୋଗାଯୋଗ କରିବୁ |'
        }
    };

    public static blogUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/akhandaodisha955678422.wordpress.com/posts/';

    public static donatePage = {
        pageTitle: 'Donate Us',
        // tslint:disable-next-line:max-line-length
        pageContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Odio morbi quis commodo odio aenean. Maecenas',
        bankAccountNumber : '',
        bankIfsc: '',
        bankBranch: '',
        bankName: '',
        bankUpi: '',
        paypal: ''
    };

    public static joinPage = {
        pageTitle: 'ଅଖଣ୍ଡ ଓଡ଼ିଶାରେ ବିପ୍ଳବରେ ଜଡ଼ିତ ହୁଅନ୍ତୁ',
        form : {
            skillList: ['ଶିକ୍ଷା', 'ସୂଚନା ଏବଂ ପ୍ରଯୁକ୍ତି ବିଦ୍ୟା', 'ସ୍ୱାସ୍ଥ୍ୟ ସେବା', 'ସଂସ୍କୃତି ଏବଂ ପରମ୍ପରା', 'ଭାଷା ଏବଂ ସାହିତ୍ୟ'],
            date: {
                label: 'ଆପଣଙ୍କ ଜନ୍ମ ତାରିଖ', hint: '', requiredError: 'ଆପଣଙ୍କ ଜନ୍ମ ତାରିଖ ଆବଶ୍ୟକ ଅଟେ', patternError: ''
            }
        },
        joinButtonText: 'ଯୋଗ ଦିଅନ୍ତୁ',
        successData: {
            // tslint:disable-next-line:max-line-length
            iconName: ['fas', 'check-circle'], class: 'success-icon-color', content: 'ଅଖଣ୍ଡ ଓଡ଼ିଶାର ଏହି ଵୃହତ ବିପ୍ଳବରେ ଯୋଗ ଦେବାକୁ ଇଛା ପ୍ରକାଶ କରିଥିବାରୁ, ଆପଣାକୁ ଅଶେଷ ଧନ୍ୟବାଦ ! ଆମେ ୪୮ ଘଣ୍ଟା ମଧ୍ୟରେ ଆପଣଙ୍କୁ ଯୋଗାଯୋଗ କରିବୁ |'
        }
    };

    public static menuData = {
        menuItems: [
            { text: 'ଆମ ପରିଚୟ', url: 'aboutus', icon: 'fingerprint', iconColor: 'red' },
            { text: 'ଆମର ଲକ୍ଷ୳', url: 'ouraim', icon: 'navigation', iconColor: '#00e7ff' },
            { text: 'ଯୋଗାଯୋଗ', url: 'contactus', icon: 'call', iconColor: 'chartreuse' },
            { text: 'ବ୍ଳଗ୍', url: 'blog', icon: 'create', iconColor: 'hsla(33, 100%, 63%, 1)' }
        ],

        socialIcons: [
            { url: 'https://facebook.com', icon: 'facebook', iconColor: 'white' },
            { url: 'https://twitter.com', icon: 'twitter', iconColor: 'hsla(196, 100%, 73%, 1)' },
            { url: 'https://youtube.com', icon: 'youtube', iconColor: 'hsla(6, 100%, 50%, 1)' }
        ]
    };

    public static homeData = {
        welcomeCard: {
            welcomeCardSalutation: 'ନମସ୍କାର !',
            // tslint:disable-next-line:max-line-length
            welcomeCardContent: 'ଓଡ଼ିଶାର ସର୍ବଵୃହତ ବିପ୍ଳବକୁ ଆପଣଙ୍କୁ ସୁସ୍ୱାଗତମ୍ | ଆଜି ହିଁ ଆମ ସହିତ ଯୋଡ଼ି ହୁଅନ୍ତୁ କିମ୍ବା ଆମକୁ ଦାନ କରି ଅଖଣ୍ଡ ଓଡ଼ିଶାର ପ୍ରଗତିରେ ସାହାଯ୍ୟ କରନ୍ତୁ |'
        },
        homeSocialIcons: [
            { iconName: ['fab', 'facebook-f'], class: 'facebook-icon-color', number: 0 },
            { iconName: ['fab', 'twitter'], class: 'twitter-icon-color', number: 234 },
            { iconName: ['fab', 'youtube'], class: 'youtube-icon-color', number: 594 },
            { iconName: ['fas', 'users'], class: 'users-icon-color', number: 0 }
        ]
    };

    public static footer = 'ଅଖଣ୍ଡ ଓଡ଼ିଶା ସଙ୍ଗଠନ';

    public static pageNotFoundPage = {
        icon : ['fas', 'times-circle'],
        message : 'Error ୪୦୪ !!! ଏଈ ପୃଷ୍ଠାଟି ଅନୁପସ୍ଥିତ !',
    };

    public static underConstruction = {
        icon : ['fas', 'users-cog'],
        message : 'ପ୍ରସ୍ତୁତ ହୋଈଯାନ୍ତୁ ! ଆରମ୍ଭ ହେବାକୁ ଯାଉଛି ଓଡ଼ିଶା ମାଟିର ସର୍ବଵୃହତ ବିପ୍ଳବ !!',
    };
}
