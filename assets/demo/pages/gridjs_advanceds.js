/* ------------------------------------------------------------------------------
 *
 *  # Grid.js advanced examples
 *
 *  Demo JS code for gridjs_advanced.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

const GridJsAdvanced = function() {


    //
    // Setup module components
    //

    // Basic
    const _componentGridJsAdvanced = function() {
        if (typeof gridjs == 'undefined') {
            console.warn('Warning - gridjs.min.js is not loaded.');
            return;
        }

        // Demo data
        const OPSI_DPS_Data = [
            
        ];




        // Events
        const gridjsEventsElement = document.querySelector(".gridjs-example-events");
        if(gridjsEventsElement) {
            const gridjsEvents = new gridjs.Grid({
                className: {
                    table: 'table'
                },
                pagination: true,
                sort: true,
                search: true,
                columns: ["Line of Business", "Client Name", "Program", "Sub_cli_sk"],
                data: OPSI_DPS_Data
            });
            gridjsEvents.render(gridjsEventsElement);

            // Events
            gridjsEvents.on('ready', () => console.log('Instance is ready'));
            gridjsEvents.on('load', () => console.log('Data is loaded'));
            gridjsEvents.on('rowClick', (...args) => console.log('row: ' + JSON.stringify(args), args));
            gridjsEvents.on('cellClick', (...args) => console.log('cell: ' + JSON.stringify(args), args));
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentGridJsAdvanced();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    GridJsAdvanced.init();
});
