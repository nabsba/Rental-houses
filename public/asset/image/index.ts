/* Doc:
 Example: getImg(banner, bannerPc.jpg ) return the right img.
*/

import * as divers from './divers';

const img: any = {
  divers
};
const getImg = (category: string, name: string): any => img[category][name];
export default getImg;
