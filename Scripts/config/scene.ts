/**
 * @filename: scene.ts
 * @author Anton Bogun
 * @author Liavontsi Brechka
 * @studentID 300863440
 * @studentID 300800345
 * @date August 15, 2016
 * @description COMP397 - Web Game Programming - Final Project - The JavaScript Arcade Game
 * @version 0.3 - Version includes levels 1, 2, and 3
 */

module config {
    /**
     * Enumeration-like class that contains appropriate scene value
     *
     * @export
     * @class Scene
     */
    export class Scene {
        public static MENU:number = 0;
        public static PLAY:number = 1;
        public static OVER:number = 2;
        public static INSTRUCTIONS:number = 3;
        public static EXIT:number = 4;
    }
}