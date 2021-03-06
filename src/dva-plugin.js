/**
* @Author: eason
* @Date:   2017-07-20T14:21:03+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-07-23T18:17:37+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/
import { createMiddleware } from './middleware';

export default function createDvaSocket(url, options, rules, ref_io) {
  const middleware = createMiddleware(url, options, rules, ref_io);

  return {
    onAction: [middleware],
  };
}
