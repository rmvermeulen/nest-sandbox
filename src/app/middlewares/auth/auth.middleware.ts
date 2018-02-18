import { Middleware, NestMiddleware } from '@nestjs/common'

@Middleware()
export class AuthMiddleware implements NestMiddleware {
  public resolve(): (req, res, next) => void {
    return (req, res, next) => {
      next()
    }
  }
}
