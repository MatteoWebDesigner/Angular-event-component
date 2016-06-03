module.exports = {
    /*
        @mixin factoryGrid properties 0 10 12 14;
    */
    factoryGrid: function (rule)  {
        var parameters = arguments[1].split(' '), 
            properties = parameters.shift() 
            listColumnSizes = parameters,
            selector = {},
            mediaList = ['xs','sm','md'],
            mediaClassList = ['Xs','Sm','Md'];
        
        for (var i = 0; i < mediaList.length; i++) {
            var media = mediaList[i];
            var selectorMedia = selector['@media --screen-min-'+media] = {};

            for (var j = 0; j < listColumnSizes.length; j++) {
                var classSelector = '&' + mediaClassList[i] + j;
                selectorMedia[classSelector] = {};
                    selectorMedia[classSelector][properties] = listColumnSizes[j] + 'px';
                    selectorMedia[classSelector]['color'] = 'red';
            }
        }

        console.log('end loop',selector);
        
        /*
            &Xs1 {
                font-size: 10px
            }
            @media --screen-min-sm {
                &Sm1 {
                    font-size: 10px
                }
            @media --screen-min-md {
                &Md1 {
                    font-size: 10px
                }
            }
            
        */
        return selector;
    }
}