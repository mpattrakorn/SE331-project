package camt.cbsd.controller;

import camt.cbsd.config.json.View;
import camt.cbsd.entity.Customer;
import camt.cbsd.entity.RegisterEntity;
import camt.cbsd.services.CustomerService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Created by Administrator on 13/5/2560.
 */
@RestController
@ConfigurationProperties(prefix = "server")
public class CustomerController {

    CustomerService customerService;

    @Autowired
    public void setCustomerService(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProduct(@PathParam("id") int id) {
        Customer customer = customerService.findById(id);
        if (customer != null)
            return Response.ok(customer).build();
        else
            //http code 204
            return Response.status(Response.Status.NO_CONTENT).build();

    }


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getCustomers() {
        List<Customer> customers = customerService.getCustomers();
        return Response.ok(customers).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON})
    public Response uploadOnlyCustomer(Customer customer) {

        customerService.addCustomer(customer);
        return Response.ok().entity(customer).build();

    }

    @JsonView(View.Login.class)
    @PostMapping("/userAuthen")
    public Customer uploadCustomerAuthen(@RequestBody RegisterEntity user) {

        Customer customer = customerService.addCustomer(user);
        return customer;
    }


}
