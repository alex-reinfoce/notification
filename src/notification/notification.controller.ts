import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { SlackDto } from './dto/slack.dto';
import { TokenGuard } from './guards/token.guard';

@Controller('notification')
@UseGuards(TokenGuard)
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('slack')
  create(@Body() createNotificationDto: SlackDto) {
    return this.notificationService.slack(createNotificationDto);
  }
}
