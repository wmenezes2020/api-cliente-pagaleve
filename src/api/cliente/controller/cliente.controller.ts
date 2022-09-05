import { 
    Controller, 
    Get,
    Post,
    Put,
    Body,
    Patch,
    Param,
    Delete,
    Headers, 
    Query, 
    UseGuards
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiQuery,
    ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '../../guards/auth.guard'
import { ClienteService } from '../service/cliente.service';
import { CreateClienteDto } from '../dto/create.cliente.dto';
import { SearchClienteDto } from '../dto/search.cliente.dto';
import { Observable } from 'rxjs';
import { ResponseClienteDto } from '../dto/response.cliente.dto';
import { ResponseDeleteClienteDto } from '../dto/response.delete.cliente.dto';

@Controller('cliente')
@ApiTags('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}

    @Post()
    @ApiCreatedResponse({
      type: ResponseClienteDto,
    })
    @ApiBearerAuth('auth-token')
    @UseGuards(new AuthGuard())
    createCliente(@Body() createClienteDto: CreateClienteDto) {
        return this.clienteService.createCliente(createClienteDto);
    }

    @Get('all')
    @ApiCreatedResponse({})
    @ApiBearerAuth('auth-token')
    @UseGuards(new AuthGuard())
    getClientes() {
        return this.clienteService.getClientes();
    }

    @Post('search')
    @ApiCreatedResponse({})
    @ApiBearerAuth('auth-token')
    @UseGuards(new AuthGuard())
    searchCliente(@Body() body: SearchClienteDto) {
        return this.clienteService.searchCliente(body);
    }

    @Get(':id')
    @ApiCreatedResponse({
      type: ResponseClienteDto,
    })
    @ApiBearerAuth('auth-token')
    @UseGuards(new AuthGuard())
    getCliente(@Param('id') id: string): Promise<ResponseClienteDto> {
        return this.clienteService.getCliente(id);
    }

    @Put(':id')
    @ApiCreatedResponse({
      type: ResponseClienteDto,
    })
    @ApiBearerAuth('auth-token')
    @UseGuards(new AuthGuard())
    updateCliente(@Param('id') id: string, @Body() createClienteDto: CreateClienteDto) {
        return this.clienteService.updateCliente(id, createClienteDto);
    }
    
    @Delete(':id')
    @ApiCreatedResponse({
      type: ResponseDeleteClienteDto,
    })
    @ApiBearerAuth('auth-token')
    @UseGuards(new AuthGuard())
    deleteCliente(@Param('id') id: string) {
        return this.clienteService.deleteCliente(id);
    }

}
