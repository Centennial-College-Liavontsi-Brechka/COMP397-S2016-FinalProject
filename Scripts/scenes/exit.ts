/**
 * @author Anton Bogun
 * @author Liavontsi Brechka
 * @studentID 300863440
 * @studentID 300800345
 * @date August 1, 2016
 * @description COMP397 - Web Game Programming - Final Project - The JavaScript Arcade Game
 * @version 0.1 - Initial version of Flying Dead
 */

module scenes {
    export class Exit extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _space: objects.Space;
        private _thankYouLabel: objects.Label;
        /**
         * Creates an instance of Instructions scene.
         *
         */
        constructor() {
            super();
        }

        /**
         *
         */
        public Start(): void {

            this._space = new objects.Space("space");
            this.addChild(this._space);

            //add the Thank You label
            this._thankYouLabel = new objects.Label(
                "THANK YOU FOR PLAYING!", "40px", "Broadway", "#7200ff",
                320, 240, true
            );

            this.addChild(this._thankYouLabel);

            core.stage.addChild(this);
        }

        public Update(): void {
            this._space.update();
            this._thankYouLabel.alpha == 1 ? this._thankYouLabel.alpha = 0 : this._thankYouLabel.alpha = 1;
            // scene updates happen here...
        }

        // EVENT HANDLERS ++++++++++++++++
    }
}