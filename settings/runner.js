FullScreenMario.prototype.settings.runner = {
    "upkeepScheduler": setTimeout,
    "upkeepCanceller": clearTimeout,
    "interval": 1000 / 60,
    "games": [
        function () {
            this.QuadsKeeper.determineAllQuadrants("Scenery", this.GroupHolder.getSceneryGroup());
            this.QuadsKeeper.determineAllQuadrants("Text", this.GroupHolder.getTextGroup());
        },
        function () {
            this.maintainSolids(this, this.GroupHolder.getSolidGroup());
        },
        function () {
            this.maintainCharacters(this, this.GroupHolder.getCharacterGroup());
        },
        function () {
            this.maintainPlayer(this, this.player);
        },
        function () {
            this.TimeHandler.handleEvents();
        },
        function () {
            this.PixelDrawer.refillGlobalCanvas(this.MapsHandler.getArea().background);
            // this.PixelDrawer.refillQuadrantGroups(
                // this.QuadsKeeper.getQuadrantRows(),
                // this.MapsHandler.getArea().background
            // );
        }
    ]
}

console.warn("The old refillGlobalCanvas is being used because quadrants aren't performant.");