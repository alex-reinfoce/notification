import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { SlackDto } from './dto/slack.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('slack')
  create(@Body() createNotificationDto: SlackDto) {
    return this.notificationService.slack(createNotificationDto);
  }
}
