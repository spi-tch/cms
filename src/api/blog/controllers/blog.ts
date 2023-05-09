/**
 * blog controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::blog.blog', ({strapi}) => ({
  // Replacing id with slug in findOne method
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.db.query('api::blog.blog').findOne(
      { where: {slug: id}, populate: ['header_image']

    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  }
}));
