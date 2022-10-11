import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDashboardDto {
    @IsNumber()
    @IsNotEmpty()
    dashboardId: number;

    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsNotEmpty()
    layout: string;
}

